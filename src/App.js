import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import Select from "react-select";
import { colourOptions } from "./asset/test-data.ts";
import makeAnimated from "react-select/animated";
import bg from "./asset/background.png";
import logo from "./asset/logo.png";
import flogo from "./asset/footer-logo.png";

const Header = () => {
  return (
    <div className="logo-header">
      <hr />
      <img src={logo} alt="McGill SOCS Logo"></img>
    </div>
  );
};

const Information = () => {
  return (
    <div className="info">
      <h1>MCGILL TA MANAGEMENT SYSTEM</h1>
      <p>
        This system allows you to blah blah blah some copywritingCupidatat
        mollit sint fugiat commodo anim.Est ut anim anim labore deserunt
        adipisicing pariatur velit irure consequat voluptate id irure. Ad labore
        occaecat officia id dolor ut fugiat pariatur nostrud ullamco incididunt
        officia consectetur. Sint aliquip do tempor fugiat in ut.
      </p>
    </div>
  );
};

const Login = () => {
  return (
    <div className="login-card">
      <nav>
        <Link to="/register">Register here</Link>
      </nav>
      <p>LOGIN</p>
      <form className="login-register">
        <ul>
          <li>
            <label htmlFor="uname">Username&#42;</label>
            <input
              type="text"
              name="uname"
              maxLength="100"
              autoComplete="off"
              required
            />
            <span>Enter your username here</span>
          </li>
          <li>
            <label htmlFor="password">Password&#42;</label>
            <input
              type="password"
              name="password"
              maxLength="100"
              autoComplete="off"
              required
            />
            <span>Enter your password here</span>
          </li>
          <li>
            <input type="submit" value="LOGIN" />
          </li>
        </ul>
      </form>
    </div>
  );
};

const Register = () => {
  return (
    <div className="register-card">
      <nav>
        <Link to="/">Back to Login</Link>
      </nav>
      <p>REGISTER</p>
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
            <span>Enter your first name here</span>
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
            <span>Enter your last name here</span>
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
            <span>Enter your McGill email here</span>
          </li>
          <li>
            <label htmlFor="id">Student ID</label>
            <input
              type="text"
              name="id"
              maxLength="9"
              autoComplete="off"
              pattern="\d{9}"
            />
            <span>Enter your student ID here</span>
          </li>
          <li>
            <label htmlFor="uname">Username&#42;</label>
            <input
              type="text"
              name="uname"
              maxLength="100"
              autoComplete="off"
              required
            />
            <span>Enter your username here</span>
          </li>
          <li>
            <label htmlFor="password">Password&#42;</label>
            <input
              type="password"
              name="password"
              maxLength="100"
              autoComplete="off"
              required
            />
            <span>Enter your password here</span>
          </li>
          <li>
            <input type="submit" value="NEXT" />
          </li>
        </ul>
      </form>
    </div>
  );
};

const UserTypeSelection = () => {
  return (
    <div className="type-card">
      <h1>Please identity yourself</h1>
      <p>I am a ...</p>
      <div>
        <input type="checkbox" id="student" name="student" value="Student" />
        <label for="student"> Student</label>
      </div>
      <div>
        <input type="checkbox" id="ta" name="ta" value="TA" />
        <label for="ta"> Teacher Assistant</label>
      </div>
      <div>
        <input type="checkbox" id="prof" name="prof" value="Professor" />
        <label for="prof"> Professor</label>
      </div>
      <div>
        <input type="checkbox" id="sysop" name="sysop" value="Sysop" />
        <label for="sysop"> System Operator</label>
      </div>
      <div>
        <input
          type="checkbox"
          id="admin"
          name="admin"
          value="TA Administrator"
        />
        <label for="admin"> TA Administrator</label>
      </div>
      <input className="type-submit" type="submit" value="NEXT" />
    </div>
  );
};

const CourseAssociation = () => {
  return (
    <div className="course-card">
      <p>
        Select courses <br />
        in which you are registered
      </p>
      <Select
        className="course-select"
        closeMenuOnSelect={true}
        components={makeAnimated()}
        clearable={true}
        isMulti
        options={colourOptions}
      />
      <input type="submit" value="SUBMIT" />
    </div>
  );
};

const Footer = () => {
  return (
    <div>
      <div className="footer">
        <div>
          In an emergency
          <ul>
            <li>514-398-3000 (downtown campus)</li>
            <li>514-398-7777 (Macdonald campus)</li>
          </ul>
        </div>
        <div>
          Visit
          <ul>
            <li>
              <a href="https://maps.mcgill.ca/">Campus Map</a>
            </li>
            <li>
              <a href="https://goo.gl/maps/ZUN8S2Ec4MU5jGNV9">
                845 Sherbrooke Street West, Montréal (Québec) H3A 0G4
              </a>
            </li>
          </ul>
        </div>
        <div>
          Get in touch
          <ul>
            <li>
              <a href="https://www.mcgill.ca/contact-us/">Contact Us</a>
            </li>
            <li>
              <a href="http://ask.mcgill.ca/">AskMcGill</a>
            </li>
            <li>
              <a href="https://www.mcgill.ca/hireastudent/">Hire a student</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer footer-bottom">
        <img src={flogo} alt="McGill Logo" />
        <div>Copyright © 2022 McGill University. </div>
        <a href="https://www.mcgill.ca/accessibility">Accessibility</a>
        <a href="https://www.mcgill.ca/privacy-notice">Privacy Notice</a>
        <a href="https://www.mcgill.ca/contact-us/">Contact Us</a>
      </div>
    </div>
  );
};

function App() {
  return (
    <div className="App" style={{ background: `url(${bg})` }}>
      <Header />
      <div className="main">
        <Information />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/type" element={<UserTypeSelection />} />
          <Route path="/course" element={<CourseAssociation />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
