import Select from "react-select";
import { Link } from "react-router-dom";
import { colourOptions } from "../../../asset/test-data.ts";
import glass from "../../../asset/feature-stickers/Magnifying Glass.png";

// if user selected add, it will redirect to add user
// if user selected edit, it will redirect to edit user
const path = "/sysops/manage/edit";

const FindUser = () => {
  return (
    <div className="feature-card">
      <img src={glass} alt="Magnifying Glass" />
      <div className="select-course-container">
        <p>Find a user</p>
        <Select
          className="select-course"
          classNamePrefix="manage"
          isLoading={false}
          isClearable={true}
          isRtl={true}
          isSearchable={true}
          name="choices"
          options={colourOptions}
        />
        <Link to={path}>
          <button className="button-style">Go</button>
        </Link>
      </div>
    </div>
  );
};

export default FindUser;
