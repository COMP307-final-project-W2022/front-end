import { Link } from "react-router-dom";

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

export default Login;
