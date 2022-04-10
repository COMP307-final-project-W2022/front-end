import { Route, Routes } from "react-router-dom";
import ManageUser from "./manageUser";
import QuickImport from "./quickImport";
import ManualImport from "./manualImport";

const Sysops = () => {
  return (
    <div>
      <Routes>
        <Route path="/sysops/manage" element={<ManageUser />} />
        <Route path="/sysops/import" element={<QuickImport />} />
        <Route path="/sysops/manual" element={<ManualImport />} />
      </Routes>
    </div>
  );
};

export default Sysops;
