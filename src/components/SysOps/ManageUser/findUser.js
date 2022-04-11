import { colourOptions } from "../../../asset/test-data.ts";
import Select from "react-select";
import glass from "../../../asset/feature-stickers/Magnifying Glass.png";

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
        <button className="button-style">Go</button>
      </div>
    </div>
  );
};

export default FindUser;
