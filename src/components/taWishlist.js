import Select from "react-select";
import { Routes, Route, useNavigate } from "react-router-dom";
import Success from "./success";
import wish from "../asset/feature-stickers/wish.png";
import { useState } from "react";
import SplashScreen from "./splashScreen";
import { query } from "../api";

const SelectTaWishList = () => {
  const [courses, setCourses] = useState(null);
  const [tas, setTas] = useState(null);
  const [selectedTas, setSelectedTas] = useState([]);
  const [selectedCourse, setSelectedCourse] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const getCourses = async () => {
    if (courses != null) return;
    const _courses = await query("Select distinct term, cid from courseusers");
    setCourses(_courses);
  };
  getCourses();

  const getTas = async () => {
    if (tas != null) return;
    const _tas = await query(
      "select * from (Select distinct username from ta) a left join (select username, firstname, lastname from users) b on a.username=b.username"
    );
    setTas(_tas);
  };
  getTas();

  const saveWishlist = async () => {
    setIsLoading(true);
    try {
      for (const ta of selectedTas) {
        await query(
          `insert into tawishlist (wid, cid, term, username) values ('${Date.now()}', '${
            selectedCourse.cid
          }', '${selectedCourse.term}', '${ta}')`
        );
      }
      return navigate("../submitted", { replace: true });
    } catch {
      alert("Failed to save wishlist");
    }
    setIsLoading(false);
  };

  if (courses == null || tas == null || isLoading)
    return (
      <div className="z-10 relative">
        <SplashScreen />
      </div>
    );

  return (
    <div className="feature-card">
      <div
        className="greet flex flex-col items-center"
        style={{ fontSize: "30px", textAlign: "center" }}
      >
        Course: {selectedCourse.cid} <br />
        <img src={wish} alt="humans" />
        Next Term: {selectedCourse.term}
      </div>
      <div className="flex flex-col items-center">
        <p> Select TAs you wish to have</p>
        <Select
          className="ta-wishlist"
          isLoading={false}
          isSearchable={true}
          options={courses.map((course) => {
            return {
              label: `${course.cid} ${course.term}`,
              value: {
                cid: course.cid,
                term: course.term,
              },
            };
          })}
          onChange={(e) => setSelectedCourse(e.value)}
        />
        <br />
        <Select
          className="ta-wishlist"
          classNamePrefix="tawish"
          isLoading={false}
          isSearchable={true}
          name="tawishlist"
          options={tas.map((ta) => {
            return {
              label: `${ta.firstname} ${ta.lastname}`,
              value: ta.username,
            };
          })}
          onChange={(e) => {
            setSelectedTas(e.map((ta) => ta.value));
          }}
          isMulti
          closeMenuOnSelect={true}
          hideSelectedOptions={true}
        />
        <br />
        <div className="mt-auto">
          <button
            disabled={selectedTas.length === 0 || isLoading}
            onClick={saveWishlist}
            style={{ float: "right" }}
            className="button-style"
          >
            Submit
          </button>
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
            <Success
              btn1="ADD MORE TO WISHLIST"
              location1="../"
              btn2="GO BACK TO DASHBOARD"
              location2="/"
            />
          }
        ></Route>
      </Routes>
    </div>
  );
};

export default Wishlist;
