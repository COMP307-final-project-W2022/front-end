import Select from "react-select";
import { colourOptions } from "../asset/test-data.ts";
import makeAnimated from "react-select/animated";

const CourseAssociation = () => {
  return (
    <div className="course-card">
      <p>
        Select courses <br />
        in which you are registered
      </p>
      <Select
        className="course-select"
        closeMenuOnSelect={true}
        components={makeAnimated()}
        clearable={true}
        isMulti
        options={colourOptions}
      />
      <input type="submit" value="SUBMIT" />
    </div>
  );
};

export default CourseAssociation;
