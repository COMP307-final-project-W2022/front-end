import { Link } from "react-router-dom";
import phone from "../../../asset/feature-stickers/Mobile.png";

const ImportProfessor = () => {
    return (
        <div className="feature-card add-user">
        <img src={phone} alt="A hand holding a phone" />
        <div className="select-course-container">
          <p>Add Professor</p>
          <form className="login-register register">
            <ul>
            <li>
              <label htmlFor="fname">First Name&#42;</label>
              <input
                type="text"
                name="fname"
                maxLength="100"
                autoComplete="off"
                required
              />
              <span>Enter first name here</span>
            </li>
            <li>
              <label htmlFor="lname">Last Name&#42;</label>
              <input
                type="text"
                name="lname"
                maxLength="100"
                autoComplete="off"
                required
              />
              <span>Enter last name here</span>
            </li>
            <li>
              <label htmlFor="email">McGill Email&#42;</label>
              <input
                type="email"
                name="email"
                maxLength="100"
                autoComplete="off"
                required
              />
              <span>Enter McGill email here</span>
            </li>
              <li>
                <Link to={"/sysops/manual/prof/added"}>
                  <input type="submit" value="ADD" />
                </Link>
              </li>
            </ul>
          </form>
        </div>
      </div>
    )
};

export default ImportProfessor;