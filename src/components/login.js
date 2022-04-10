import { Link } from "react-router-dom";
import React, { useState } from "react";
import firebaseApp from "../constants/firebase";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const loginWithFirebase = async () => {
    setLoading(true);
    try {
      const auth = getAuth(firebaseApp);
      await signInWithEmailAndPassword(auth, email, password);
      setLoading(false);
      setError();
    } catch (error) {
      setLoading(false);
      setError("Login failed");
    }
  };

  return (
    <div className="login-card">
      <nav>
        <Link to="/register">Register here</Link>
      </nav>
      <p>LOGIN</p>
      <form
        className="login-register"
        onSubmit={(e) => {
          e.preventDefault();
          loginWithFirebase();
        }}
      >
        <ul>
          <li>
            <label htmlFor="uname">Email&#42;</label>
            <input
              type="email"
              name="email"
              maxLength="100"
              autoComplete="off"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <span>Enter your email here</span>
          </li>
          <li>
            <label htmlFor="password">Password&#42;</label>
            <input
              type="password"
              name="password"
              maxLength="100"
              autoComplete="off"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <span>Enter your password here</span>
          </li>
          <div>{error}</div>
          <li>
            <input type="submit" value="LOGIN" disabled={loading} />
          </li>
        </ul>
      </form>
    </div>
  );
};

export default Login;
