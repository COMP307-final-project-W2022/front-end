import { getAuth } from "firebase/auth";
import { useState } from "react";
import logo from "../asset/logo.png";
import logout from "../asset/logout.png";
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
      <a href="/dashboard" className="logo-icon">
        <img src={logo} alt="McGill SOCS Logo"></img>
      </a>
      {user && (
        <button onClick={signout} className="logout-button">
          <img src={logout} alt="Log out" />
        </button>
      )}
    </div>
  );
};

export default Header;
