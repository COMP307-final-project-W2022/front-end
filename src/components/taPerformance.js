import Select from "react-select";
import { colourOptions } from "../asset/test-data.ts";
import { Routes, Route, Link } from "react-router-dom";
import Success from "./success";
import performance from "../asset/feature-stickers/performance.png";

const courseCode = "COMP250";
const term = "Winter 2022";

const RateTaPerformance = () => {
  return (
    <div className="feature-card">
      <img src={performance} alt="Computer" className="max-w-[200px]" />
      <div className="rating-container">
        <p>
          {courseCode}, {term}
          <br />
        </p>
        <label for="review">Select the TA you want to review</label>
        <br />
        <Select
          className="ta-wishlist"
          classNamePrefix="tawish"
          isLoading={false}
          isClearable={true}
          isRtl={true}
          isSearchable={true}
          name="tawishlist"
          options={colourOptions}
          width="30px"
        />
        <br />
        <label for="review">Short Review (1000 characters limit)</label>
        <br />
        <textarea id="review" name="review" rows="10">
          Leave a short review here...
        </textarea>
        <br />
        <Link to="/taManagement/submitted">
          <button className="button-style">Submit</button>
        </Link>
      </div>
    </div>
  );
};

const TAPerformance = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<RateTaPerformance />}></Route>
        <Route
          path="/submitted"
          element={
            <Success btn1="GO BACK TO OPTIONS" btn2="GO BACK TO DASHBOARD" />
          }
        ></Route>
      </Routes>
    </div>
  );
};

export default TAPerformance;
