import { getAuth } from "firebase/auth";
import { useState } from "react";
import logo from "../asset/logo.png";
const Header = () => {
  getAuth().onAuthStateChanged((user) => {
    setUser(user);
  });
  const [user, setUser] = useState(null);

  const signout = () => {
    getAuth().signOut();
  };

  return (
    <div className="logo-header">
      <hr />
      <img src={logo} alt="McGill SOCS Logo"></img>
      {user && (
        <button onClick={signout} className="logout-button">
          Logout
        </button>
      )}
    </div>
  );
};

export default Header;
