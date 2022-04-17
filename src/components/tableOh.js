import React, { useState } from "react";
import Paper from "@mui/material/Paper";
import { EditingState } from "@devexpress/dx-react-grid";
import {
  Grid,
  VirtualTable,
  TableHeaderRow,
  TableEditRow,
  TableEditColumn,
} from "@devexpress/dx-react-grid-material-ui";
import { query } from "../api";
import SplashScreen from "./splashScreen";

const getRowId = (row) => row.id;

const TableOh = () => {
  const [columns, setColumns] = useState([]);
  const [rows, setRows] = useState(null);
  const [isLoading, setLoading] = useState(false);
  const [editingStateColumnExtensions] = useState([
    { columnName: "name", editingEnabled: false },
  ]);

  const getData = async () => {
    if (rows != null) return;
    const _rows = await query("select * from courseresp");
    for (const row of _rows) {
      row.id = row["crid"];
    }
    const _cols =
      _rows.length === 0
        ? []
        : Object.keys(_rows[0]).map((key) => {
            return {
              name: key,
              title: key,
            };
          });
    setRows(_rows);
    setColumns(_cols);
  };

  getData();
  if (rows == null || isLoading)
    return (
      <div className="z-10 relative">
        <SplashScreen />
      </div>
    );

  const commitChanges = async ({ added, changed, deleted }) => {
    setLoading(true);
    if (added != null) {
      for (const row of added) {
        try {
          await query(
            `insert into courseresp values ('${row.crid}', '${row.cid}', '${row.term}', '${row.username}', '${row.usertype}', '${row.job}', '${row.rtime}', '${row.rlocation}')`
          );
        } catch {
          added.splice(added.indexOf(row), 1);
          alert(`Failed to add data: ${row.crid}`);
        }
      }
    }

    if (changed != null) {
      const changedRowIds = Object.keys(changed);
      for (const rowId of changedRowIds) {
        const existingRow = rows.find((r) => r.id === rowId);
        const row = { ...existingRow, ...changed[rowId] };
        try {
          await query(
            `update courseresp set cid='${row.cid}', term='${row.term}', username='${row.username}', usertype='${row.usertype}', job='${row.job}', rtime='${row.rtime}', rlocation='${row.rlocation}' where crid='${rowId}'`
          );
        } catch {
          delete changed[rowId];
          alert(`Failed to update data: ${rowId}`);
        }
      }
    }

    if (deleted != null) {
      for (const rowId of deleted) {
        try {
          await query(`delete from courseresp where crid='${rowId}'`);
        } catch {
          deleted.splice(deleted.indexOf(rowId), 1);
          alert(`Failed to delete data: ${rowId}`);
        }
      }
    }

    let changedRows;
    if (added) {
      const startingAddedId =
        rows.length > 0 ? rows[rows.length - 1].id + 1 : 0;
      changedRows = [
        ...rows,
        ...added.map((row, index) => ({
          id: startingAddedId + index,
          ...row,
        })),
      ];
    }
    if (changed) {
      changedRows = rows.map((row) =>
        changed[row.id] ? { ...row, ...changed[row.id], id: row.id } : row
      );
    }
    if (deleted) {
      const deletedSet = new Set(deleted);
      changedRows = rows.filter((row) => !deletedSet.has(row.id));
    }
    console.log(added, changed, deleted);
    setRows(changedRows);
    setLoading(false);
  };

  return (
    <Paper style={{ height: "50vh" }}>
      <Grid rows={rows} columns={columns} getRowId={getRowId}>
        <EditingState
          onCommitChanges={commitChanges}
          defaultEditingRowIds={[0]}
          columnExtensions={editingStateColumnExtensions}
        />
        <VirtualTable height="50vh" />
        <TableHeaderRow />
        <TableEditRow />
        <TableEditColumn showAddCommand showEditCommand showDeleteCommand />
      </Grid>
    </Paper>
  );
};

export default TableOh;
