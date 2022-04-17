import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { query } from "../../../api";
import phone from "../../../asset/feature-stickers/Mobile.png";
import SplashScreen from "../../splashScreen";

const ImportCourse = () => {
  const [term, setTerm] = useState(null);
  const [courseCode, setCourseCode] = useState(null);
  const [courseName, setCourseName] = useState(null);
  const [professorUsername, setProfessorUsername] = useState(null);
  const [enrollmentNumber, setEnrollmentNumber] = useState(null);
  const [taQuota, setTaQuota] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const navigator = useNavigate();

  const saveCourse = async () => {
    if (
      term == null ||
      courseCode == null ||
      courseName == null ||
      professorUsername == null ||
      enrollmentNumber == null ||
      taQuota == null
    ) {
      return;
    }
    setIsLoading(true);
    try {
      await query(
        `insert into courseinfo values ( '${courseCode}','${term}', '${courseName}', '${professorUsername}', '${enrollmentNumber}', '${taQuota}')`
      );

      return navigator("./added", { replace: true });
    } catch (e) {
      alert("Could not add course");
    }
    setIsLoading(false);
  };

  if (isLoading) return <SplashScreen />;

  return (
    <div className="feature-card add-user">
      <img src={phone} alt="A hand holding a phone" />
      <div className="select-course-container">
        <p>Add Course</p>
        <form
          className="login-register register"
          onSubmit={(e) => {
            e.preventDefault();
            saveCourse();
          }}
        >
          <ul>
            <li>
              <label htmlFor="term">Term&#42;</label>
              <input
                type="text"
                name="term"
                maxLength="100"
                autoComplete="off"
                required
                onChange={(e) => setTerm(e.target.value)}
              />
              <span>Enter term here</span>
            </li>
            <li>
              <label htmlFor="ccode">Course Code&#42;</label>
              <input
                type="text"
                name="ccode"
                maxLength="10"
                autoComplete="off"
                required
                onChange={(e) => setCourseCode(e.target.value)}
              />
              <span>Enter course name here</span>
            </li>
            <li>
              <label htmlFor="cname">Course Name&#42;</label>
              <input
                type="text"
                name="cname"
                maxLength="100"
                autoComplete="off"
                required
                onChange={(e) => setCourseName(e.target.value)}
              />
              <span>Enter course name here</span>
            </li>
            <li>
              <label htmlFor="prof">Professor Username&#42;</label>
              <input
                type="text"
                name="prof"
                maxLength="100"
                autoComplete="off"
                required
                onChange={(e) => setProfessorUsername(e.target.value)}
              />
              <span>Enter Professor userame here</span>
            </li>
            <li>
              <label htmlFor="enrolnum">Enrollment Number&#42;</label>
              <input
                type="number"
                name="enrolnum"
                autoComplete="off"
                required
                onChange={(e) => setEnrollmentNumber(e.target.value)}
              />
              <span>Enter Enrollment Number here</span>
            </li>
            <li>
              <label htmlFor="taquota">TA Quota&#42;</label>
              <input
                type="number"
                name="taquota"
                autoComplete="off"
                required
                onChange={(e) => setTaQuota(e.target.value)}
              />
              <span>Enter TA Quota here</span>
            </li>
            <li>
              <input type="submit" value="ADD" />
            </li>
          </ul>
        </form>
      </div>
    </div>
  );
};

export default ImportCourse;
