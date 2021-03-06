import Select from "react-select";
import { colourOptions } from "../asset/test-data.ts";
import { Routes, Route, Link } from "react-router-dom";
import performance from "../asset/feature-stickers/performance.png";
import wish from "../asset/feature-stickers/wish.png";
import resp from "../asset/feature-stickers/resp.png";
import book from "../asset/feature-stickers/Brainstorming.png";
import OHrespons from "./ohResp";
import TAPerformance from "./taPerformance";
import Wishlist from "./taWishlist";
import RateTA from "./rateTA";

const TAmanageFeature = (props) => {
  return (
    <div>
      <div className="rate-card">
        <h1>{props.title}</h1>
        <div className="feature-description" style={{ textAlign: "center" }}>
          {props.description}
        </div>
        <img width="150" alt="rate" height="150" src={props.image}></img>
        <Link to={props.path}>
          <button>Go</button>
        </Link>
      </div>
    </div>
  );
};

const CourseTermSelection = () => {
  return (
    <div className="feature-card">
      <div>
        <p>Select Course and Term</p>
        <img src={book} alt="A book" />
      </div>
      <div className="select-course-container">
        <div className="select-term-container">
          <div className="term-year">
            <p>Term</p>
            <Select
              className="select-term"
              classNamePrefix="term"
              isLoading={false}
              isClearable={true}
              isRtl={true}
              isSearchable={true}
              name="term"
              options={colourOptions}
            />
          </div>
          <div className="term-year">
            <p>Year</p>
            <Select
              className="select-year"
              classNamePrefix="year"
              isLoading={false}
              isClearable={true}
              isRtl={true}
              isSearchable={true}
              name="year"
              options={colourOptions}
            />
          </div>
        </div>
        <p>Select a Course</p>
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
        <button className="button-style">Go</button>
      </div>
    </div>
  );
};

const TaManagement = () => {
  return (
    <Routes>
      <Route path="/select" element={<CourseTermSelection />} />
      <Route
        path="/options/*"
        element={
          <div className="TAmanageOptions">
            <div className="TAmanageFeatures">
              <TAmanageFeature
                title="Office Hours and Responsiblities "
                description="See, edit and add office hours and responsibilities for all TAs"
                image={resp}
                path="../editOh"
              />
              <TAmanageFeature
                title="TA WishList"
                description="Select TAs you want to be on your wishlist"
                image={wish}
                path="../wishlist"
              />
              <TAmanageFeature
                title="TA Performance"
                description="Grade a TA's performance"
                image={performance}
                path="../taPerformance"
              />
            </div>
          </div>
        }
      />
      <Route path="/editOh/*" element={<OHrespons />} />
      <Route path="/taPerformance/*" element={<TAPerformance />} />
      <Route path="/wishlist/*" element={<Wishlist />} />
      <Route path="/rate/*" element={<RateTA />} />
    </Routes>
  );
};

export default TaManagement;
