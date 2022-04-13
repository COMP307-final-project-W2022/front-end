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
        <Route path="/sysops" element={<SysopsOptions />} />

        {/* three features */}
        <Route path="/sysops/manage" element={<ManageUser />} />
        <Route path="/sysops/import" element={<QuickImport />} />
        <Route path="/sysops/manual" element={<ManualImport />} />

        {/* manage user */}
        <Route path="/sysops/manage/find" element={<FindUser />} />
        <Route path="/sysops/manage/add" element={<AddUser />} />
        <Route path="/sysops/manage/edit" element={<EditUser />} />
        <Route path="/sysops/manage/delete" element={<DeleteUser />} />

        {/* manage user success page */}
        <Route path="/sysops/manage/deleted" element={<Success btn1="Delete Another User" btn2="Log Out"/>} />
        <Route path="/sysops/manage/added" element={<Success btn1="Add Another User" btn2="Log Out"/>} />
        <Route path="/sysops/manage/edited" element={<Success btn1="Edit Another User" btn2="Log Out"/>} />
        <Route path="/sysops/imported" element={<Success btn1="Import Another CSV file" btn2="Log Out"/>} />

        {/* manual import */}
        <Route path="/sysops/manual/course" element={<ImportCourse />} />
        <Route path="/sysops/manual/prof" element={<ImportProfessor />} />

        {/* manual import success page */}
        <Route path="/sysops/manual/course/added" element={<Success btn1="Add Another Course" btn2="Log Out"/>} />
        <Route path="/sysops/manual/prof/added" element={<Success btn1="Add Another Professor" btn2="Log Out"/>} />
      </Routes>
    </div>
  );
};

export default Sysops;
