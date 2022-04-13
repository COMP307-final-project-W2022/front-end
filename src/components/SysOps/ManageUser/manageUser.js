import Select from "react-select";
import { Link } from "react-router-dom";
import { manageUserOptions } from "../../../asset/selections.ts";
import earth from "../../../asset/feature-stickers/Planet.png";

// change this const can see different component
// in application, both edit and delete will lead to find user
// add will lead to AddUser
const opsPath = "/sysops/manage/find";

const ManageUser = () => {
  return (
    <div className="feature-card">
      <img src={earth} alt="Cartoon planet earth" />
      <div className="select-course-container">
        <p>What would you like to do?</p>
        <Select
          className="select-course"
          classNamePrefix="manage"
          isLoading={false}
          isClearable={true}
          isRtl={true}
          isSearchable={true}
          name="choices"
          options={manageUserOptions}
        />
        {/* here depends on user input: add/delete/edit, it should redirect to different pages*/}
        {/* therefore, this link should be removed once connected to backend */}
        <Link to={opsPath}>
          <button className="button-style">Go</button>
        </Link>
      </div>
    </div>
  );
};

export default ManageUser;
