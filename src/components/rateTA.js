import Select from "react-select";
import { Routes, Route, Link, Navigate, useNavigate } from "react-router-dom";
import Rating from "@mui/material/Rating";

import Success from "./success";

import book from "../asset/feature-stickers/Brainstorming.png";
import computer from "../asset/feature-stickers/KanbanBoard.png";
import { query } from "../api";
import { useState } from "react";
import SplashScreen from "./splashScreen";

let courseCode = null;
let term = null;
let taName = null;
let taUsername = null;

const CourseSelection = () => {
  const [courses, setCourses] = useState(null);

  const getCourses = async () => {
    if (courses != null) return;
    const _courses = await query(
      "select * from (Select distinct term, cid, username from courseusers where usertype='TA') a left join (select username, firstname, lastname from users) b on a.username=b.username"
    );
    setCourses(_courses);
  };

  getCourses();

  if (courses == null) return <SplashScreen />;

  return (
    <div className="feature-card">
      <img src={book} alt="A book" />
      <div className="select-course-container">
        <p>Select a course and TA</p>
        <Select
          className="select-course"
          classNamePrefix="course"
          isSearchable={true}
          name="course"
          onChange={(e) => {
            courseCode = e.value.cid;
            term = e.value.term;
            taName = e.value.firstname + " " + e.value.lastname;
            taUsername = e.value.username;
          }}
          options={courses.map((course) => {
            return {
              label: `${course.cid} - ${course.term} - ${course.firstname} ${course.lastname}`,
              value: {
                cid: course.cid,
                term: course.term,
                username: course.username,
                firstname: course.firstname,
                lastname: course.lastname,
              },
            };
          })}
        />
        <Link to="../main">
          <button className="button-style">Rate</button>
        </Link>
      </div>
    </div>
  );
};

const TARating = () => {
  const [rating, setRating] = useState(null);
  const [comment, setComment] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const submitReview = async () => {
    setIsLoading(true);
    if (rating == null) return;
    await query(
      `insert into tarating (rid, cid, term, tusername, score, tcomment) values ('${Date.now()}', '${courseCode}', '${term}', '${taUsername}', '${rating}', '${comment}')`
    );
    return navigate("../submitted", { replace: true });
  };

  if (courseCode == null) return <Navigate to="../select" />;

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
        <Rating
          onChange={(e) => setRating(e.target.value)}
          name="simple-controlled size-large"
          max={5}
        />
        <br />
        <label for="review">Short Review (1000 characters limit)</label>
        <br />
        <textarea
          id="review"
          name="review"
          placeholder="Leave a short review here..."
          rows="10"
          onChange={(e) => setComment(e.target.value)}
        ></textarea>
        <br />

        <button
          disabled={isLoading}
          className="button-style"
          onClick={submitReview}
        >
          Submit
        </button>
      </div>
    </div>
  );
};

const RateTA = () => {
  return (
    <div>
      <Routes>
        <Route path="/select" element={<CourseSelection />}></Route>
        <Route path="/main" element={<TARating />}></Route>
        <Route
          path="/submitted"
          element={
            <Success
              btn1="GIVE ANOTHER RATING"
              btn2="GO BACK TO DASHBOARD"
              location1="../select"
              location2="/dashboard"
            />
          }
        ></Route>
      </Routes>
    </div>
  );
};

export default RateTA;
