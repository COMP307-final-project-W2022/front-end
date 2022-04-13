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
      <div className="greet" style={{ fontSize: "30px", textAlign: "center" }}>
        Course: {course} <br />
        <img src={wish} alt="humans" />
        Next Term: {term}
      </div>
      <div>
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
        <div>
          <Link to="/taManagement/submitted">
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
