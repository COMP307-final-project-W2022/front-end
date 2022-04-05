import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import bg from "./asset/background.png";
import logo from "./asset/logo.png";

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
            <input type="text" name="id" maxLength="9" autoComplete="off" pattern="\d{9}"/>
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

const CourseAssociation = () => {
  return (
    <div className="login-register">
      <p>Select courses in which you are registered</p>
      <label>Courses</label>
      <textarea>
        Select courses...
      </textarea>
    </div>
  );
};

const Footer = () => {
  return (
    <div className="footer">
      <div>
        <ul>
        In an emergency
          <li>514-398-3000 (downtown campus)</li>
          <li>514-398-7777 (Macdonald campus)</li>
        </ul>
      </div>
      <div>
        <ul>
        Visit
          <li><a href="https://maps.mcgill.ca/">Campus Map</a></li>
          <li><a href="https://goo.gl/maps/ZUN8S2Ec4MU5jGNV9">845 Sherbrooke Street West, Montréal (Québec)  H3A 0G4</a></li>
        </ul>
      </div>
      <div>
        <ul>
        Get in touch
          <li><a href="https://www.mcgill.ca/contact-us/">Contact Us</a></li>
          <li><a href="http://ask.mcgill.ca/">AskMcGill</a></li>
          <li><a href="https://www.mcgill.ca/hireastudent/">Hire a student</a></li>
        </ul>
      </div>
    </div>
  )
}

function App() {
  return (
    <div className="App" style={{ background: `url(${bg})` }}>
      <Header />
      <div className="main">
        <Information />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
