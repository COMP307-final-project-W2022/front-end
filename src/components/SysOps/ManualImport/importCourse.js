import { Link } from "react-router-dom";
import phone from "../../../asset/feature-stickers/Mobile.png";

const ImportCourse = () => {
    return (
        <div className="feature-card add-user">
        <img src={phone} alt="A hand holding a phone" />
        <div className="select-course-container">
          <p>Add Course</p>
          <form className="login-register register">
            <ul>
              <li>
                <label htmlFor="term">Term&#42;</label>
                <input
                  type="text"
                  name="term"
                  maxLength="100"
                  autoComplete="off"
                  required
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
                />
                <span>Enter course name here</span>
              </li>
              <li>
                <label htmlFor="prof">Professor&#42;</label>
                <input
                  type="text"
                  name="prof"
                  maxLength="100"
                  autoComplete="off"
                  required
                />
                <span>Enter Professor Name here</span>
              </li>
              <li>
                <label htmlFor="enrolnum">Enrollment Number&#42;</label>
                <input
                  type="number"
                  name="enrolnum"
                  autoComplete="off"
                  required
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
                />
                <span>Enter TA Quota here</span>
              </li>
              <li>
                <Link to={"/sysops/manual/course/added"}>
                  <input type="submit" value="ADD" />
                </Link>
              </li>
            </ul>
          </form>
        </div>
      </div>
    )
};

export default ImportCourse;