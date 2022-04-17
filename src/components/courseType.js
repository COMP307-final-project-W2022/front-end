import Select from "react-select";
import { useState } from "react";
import { query } from "../api";
import SplashScreen from "./splashScreen";
import { getAuth } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const CourseAssociation = (params) => {
  const [courses, setCourses] = useState(null);
  const [selectedCourses, setSelectedCourses] = useState([]);
  const [options, setOptions] = useState([]);

  const getCourses = async () => {
    if (courses != null) return;
    const _courses = await query(
      `select a.term, a.cid from courseinfo a left join (select term, cid from courseusers where username='${params.user.uid}') b on a.term=b.term and a.cid=b.cid where b.term is null`
    );
    setCourses(_courses);
    setOptions(
      _courses.map((course) => {
        return {
          label: `${course.cid} - ${course.term}`,
          value: {
            cid: course.cid,
            term: course.term,
            role: "Student",
          },
        };
      })
    );
  };

  getCourses();

  if (courses == null) return <SplashScreen />;

  return (
    <div className="course-card">
      <p>
        Select courses <br />
        in which you are registered
      </p>
      <Select
        className="course-select"
        closeMenuOnSelect={false}
        isMulti
        options={options}
        onChange={(e) => {
          setSelectedCourses(e.map((course) => course.value));
        }}
      />
      <input
        onClick={() => {
          params.onChosenCourses(selectedCourses);
        }}
        type="submit"
        value="Next"
      />
    </div>
  );
};

const Choices = (params) => {
  return (
    <div>
      <select
        className="border border-solid px-2 py-1"
        onChange={(e) => {
          params.selectedRole(e.target.value);
        }}
      >
        <option value="Student">Student</option>
        <option value="TA">TA</option>
        <option value="admin">TA Admin</option>
        <option value="Professor">Professor</option>
      </select>
    </div>
  );
};

const CourseType = () => {
  const [userCourses, setUserCourses] = useState([]);
  const [user, setUser] = useState(undefined);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  getAuth().onAuthStateChanged((_user) => {
    if (user != null) return;
    setUser(_user);
  });

  if (user === undefined) {
    return <SplashScreen />;
  }

  const saveRoles = async () => {
    setIsLoading(true);
    for (const course of userCourses) {
      try {
        await query(
          `insert into courseusers values('${course.cid}', '${course.term}', '${user.uid}', '${course.role}')`
        );
      } catch (e) {
        alert(
          "Could not save roles for course " + course.cid + " " + course.term
        );
      }
    }
    setIsLoading(false);
    return navigate("/dashboard", { replace: true });
  };

  if (isLoading) return <SplashScreen />;

  if (userCourses.length === 0)
    return (
      <CourseAssociation
        onChosenCourses={(courses) => setUserCourses(courses)}
        user={user}
      />
    );
  return (
    <div className="course-card">
      {userCourses.length > 0 &&
        userCourses.map((course) => {
          return (
            <div
              className="type-select-container"
              key={`${course.cid} ${course.term}`}
            >
              {course.cid} {course.term}{" "}
              <Choices
                selectedRole={(role) => {
                  course.role = role;
                }}
              />
            </div>
          );
        })}
      <br />
      <input type="submit" onClick={() => saveRoles()} value="Save" />
    </div>
  );
};

export default CourseType;
