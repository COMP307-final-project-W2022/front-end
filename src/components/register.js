import { Link } from "react-router-dom";

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

export default Register;
