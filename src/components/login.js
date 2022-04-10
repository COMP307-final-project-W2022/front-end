import { Link } from "react-router-dom";
import React, { useState } from "react";
import firebaseApp from "../constants/firebase";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const loginWithFirebase = async () => {
    console.log("Logging in with firebase");
    setLoading(true);
    try {
      const auth = getAuth(firebaseApp);
      await signInWithEmailAndPassword(auth, username, password);
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
            <label htmlFor="uname">Username&#42;</label>
            <input
              type="text"
              name="username"
              maxLength="100"
              autoComplete="off"
              required
              value={username}
              onChange={(e) => setUsername(e.target.value)}
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
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <span>Enter your password here</span>
          </li>
          <li>
            <input type="submit" value="LOGIN" disabled={loading} />
          </li>
        </ul>
      </form>
      <div>{<p>{error}</p>}</div>
    </div>
  );
};

export default Login;
