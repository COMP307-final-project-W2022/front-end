import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { Link } from "react-router-dom";
import api from "../api";
import firebaseApp from "../constants/firebase";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [sid, setSid] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const register = async () => {
    setLoading(true);
    try {
      await api.post("/user/register", {
        email,
        password,
        username,
        firstname,
        lastname,
        sid,
      });
      const auth = getAuth(firebaseApp);
      await signInWithEmailAndPassword(auth, email, password);
    } catch (e) {
      setError("Could not create user");
    }
    setLoading(false);
  };

  return (
    <div className="register-card">
      <nav>
        <Link to="/">Back to Login</Link>
      </nav>
      <p>REGISTER</p>
      <form
        className="login-register register"
        onSubmit={(e) => {
          e.preventDefault();
          register();
        }}
      >
        <ul>
          <li>
            <label htmlFor="fname">First Name&#42;</label>
            <input
              type="text"
              name="fname"
              maxLength="100"
              autoComplete="off"
              onChange={(e) => setFirstname(e.target.value)}
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
              onChange={(e) => setLastname(e.target.value)}
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
              onChange={(e) => setEmail(e.target.value)}
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
              onChange={(e) => setSid(e.target.value)}
              pattern="\d{9}"
            />
            <span>Enter your student ID here</span>
          </li>
          <li>
            <label htmlFor="uname">Username&#42;</label>
            <input
              type="text"
              name="username"
              maxLength="100"
              autoComplete="off"
              onChange={(e) => setUsername(e.target.value)}
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
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <span>Enter your password here</span>
          </li>
          <div>{error}</div>
          <li>
            <input type="submit" value="NEXT" disabled={loading} />
          </li>
        </ul>
      </form>
    </div>
  );
};

export default Register;
