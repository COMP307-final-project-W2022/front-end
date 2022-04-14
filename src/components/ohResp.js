import Success from "./success";
import TableOh from "./tableOh.js";
import { Routes, Route, Link } from "react-router-dom";

const EditOh = () => {
  return (
    <div className="feature-card">
      <div className="max-w-2xl">
        <p> Edit OH and Responsibilties </p>
        <TableOh />
        <br />
        <Link to="./submitted">
          <button className="button-style" style={{ float: "right" }}>
            Submit
          </button>
        </Link>
      </div>
    </div>
  );
};

const OHrespons = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<EditOh />}></Route>
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

export default OHrespons;
