import Select from "react-select";
import { Link } from "react-router-dom";
import { manageUserOptions } from "../asset/selections.ts";
import earth from "../asset/feature-stickers/Planet.png";
import glass from "../asset/feature-stickers/Magnifying Glass.png";

// change this const can see different component
// in application, both edit and delete will lead to find user
// add will lead to AddUser
const opsPath = "/sysops/manage/add";


const AddUser = () => {
    return (
      <div className="feature-card">
        <img src={glass} alt="Magnifying Glass" />
        <div className="select-course-container">
          <p>Select a course and TA</p>
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
          <button className="button-style">Go</button>
        </div>
      </div>
    );
  };

  const DeleteUser = () => {
    return (
      <div className="feature-card">
        <img src={glass} alt="Magnifying Glass" />
        <div className="select-course-container">
          <p>Select a course and TA</p>
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
          <button className="button-style">Go</button>
        </div>
      </div>
    );
  };

const ManageUser = () => {
  return (
    <div className="feature-card">
      <img src={earth} alt="Cartoon planet earth" />
      <div className="select-course-container">
        <p>Select a course and TA</p>
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
