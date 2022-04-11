import Select from "react-select";
import { colourOptions } from "../asset/test-data.ts";
import { Routes, Route, Link } from "react-router-dom";
import Rating from "@mui/material/Rating";

import Success from "./success";

import book from "../asset/feature-stickers/Brainstorming.png";
import computer from "../asset/feature-stickers/KanbanBoard.png";

const courseCode = "SMTH 123";
const term = "Winter 2022";
const taName = "John Doe";

const CourseSelection = () => {
  return (
    <div className="feature-card">
      <img src={book} alt="A book" />
      <div className="select-course-container">
        <p>Select a course and TA</p>
        <Select
          className="select-course"
          classNamePrefix="course"
          isLoading={false}
          isClearable={true}
          isRtl={true}
          isSearchable={true}
          name="course"
          options={colourOptions}
        />
        <Link to="/rate/main">
          <button className="button-style">Rate</button>
        </Link>
      </div>
    </div>
  );
};

const TARating = () => {
  return (
    <div className="feature-card">
      <img src={computer} alt="Computer" />
      <div className="rating-container">
        <p>
          {courseCode}, {term}
          <br />
          TA: {taName}
        </p>
        <h3>Rate the TA on a scale of 0 to 5</h3>
        <Rating name="simple-controlled size-large" max={6} />
        <br />
        <label for="review">Short Review (1000 characters limit)</label>
        <br />
        <textarea id="review" name="review" rows="10">
          Leave a short review here...
        </textarea>
        <br />
        <Link to="/rate/submitted">
        <button className="button-style">Submit</button>
        </Link>
      </div>
    </div>
  );
};

const RateTA = () => {
  return (
    <div>
      <Routes>
        <Route path="/rate/select" element={<CourseSelection />}></Route>
        <Route path="/rate/main" element={<TARating />}></Route>
        <Route
          path="/rate/submitted"
          element={
            <Success btn1="GIVE ANOTHER RATING" btn2="GO BACK TO DASHBOARD" />
          }
        ></Route>
      </Routes>
    </div>
  );
};

export default RateTA;
