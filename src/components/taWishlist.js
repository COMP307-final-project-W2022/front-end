import Select from "react-select";
import { colourOptions } from "../asset/test-data.ts";
import { Routes, Route, Link } from "react-router-dom";
import Success from "./success";
import wish from "../asset/feature-stickers/wish.png";
const course = "COMP250";
const term = "FALL2022";

const SelectTaWishList = () => {
  return (
    <div className="feature-card">
      <div
        className="greet flex flex-col items-center"
        style={{ fontSize: "30px", textAlign: "center" }}
      >
        Course: {course} <br />
        <img src={wish} alt="humans" className="max-w-[200px]" />
        Next Term: {term}
      </div>
      <div className="flex flex-col">
        <p> Select TAs you wish to have</p>
        <Select
          className="ta-wishlist"
          classNamePrefix="tawish"
          isLoading={false}
          isClearable={true}
          isRtl={true}
          isSearchable={true}
          name="tawishlist"
          options={colourOptions}
          isMulti
          closeMenuOnSelect={false}
          hideSelectedOptions={false}
        />
        <br />
        <div className="mt-auto">
          <Link to="./submitted">
            <button style={{ float: "right" }} className="button-style">
              Submit
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

const Wishlist = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<SelectTaWishList />}>
          {" "}
        </Route>
        <Route
          path="/submitted"
          element={
            <Success btn1="BACK TO OPTIONS" btn2="GO BACK TO DASHBOARD" />
          }
        ></Route>
      </Routes>
    </div>
  );
};

export default Wishlist;
