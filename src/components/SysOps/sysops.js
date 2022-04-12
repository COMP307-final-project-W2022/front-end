import { Route, Routes } from "react-router-dom";
import ManageUser from "./ManageUser/manageUser";
import QuickImport from "./quickImport";
import ManualImport from "./ManualImport/manualImport";
import FindUser from "./ManageUser/findUser";
import AddUser from "./ManageUser/addUser";
import EditUser from "./ManageUser/editUser";
import DeleteUser from "./ManageUser/deleteUser";
import Success from "../success";
import SysopsOptions from "./sysopsOptions";
import ImportCourse from "./ManualImport/importCourse";
import ImportProfessor from "./ManualImport/importProf";

const Sysops = () => {
  return (
    <div>
      <Routes>
        {/* choose from three options */}
        <Route path="/" element={<SysopsOptions />} />

        {/* three features */}
        <Route path="/manage" element={<ManageUser />} />
        <Route path="/import" element={<QuickImport />} />
        <Route path="/manual" element={<ManualImport />} />

        {/* manage user */}
        <Route path="/manage/find" element={<FindUser />} />
        <Route path="/manage/add" element={<AddUser />} />
        <Route path="/manage/edit" element={<EditUser />} />
        <Route path="/manage/delete" element={<DeleteUser />} />

        {/* manage user success page */}
        <Route
          path="/manage/deleted"
          element={<Success btn1="Delete Another User" btn2="Log Out" />}
        />
        <Route
          path="/manage/added"
          element={<Success btn1="Add Another User" btn2="Log Out" />}
        />
        <Route
          path="/manage/edited"
          element={<Success btn1="Edit Another User" btn2="Log Out" />}
        />
        <Route
          path="/imported"
          element={<Success btn1="Import Another CSV file" btn2="Log Out" />}
        />

        {/* manual import */}
        <Route path="/manual/course" element={<ImportCourse />} />
        <Route path="/manual/prof" element={<ImportProfessor />} />

        {/* manual import success page */}
        <Route
          path="/manual/course/added"
          element={<Success btn1="Add Another Course" btn2="Log Out" />}
        />
        <Route
          path="/manual/prof/added"
          element={<Success btn1="Add Another Professor" btn2="Log Out" />}
        />
      </Routes>
    </div>
  );
};

export default Sysops;
