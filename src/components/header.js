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
      < hr />
      <img src={logo} alt="McGill SOCS Logo" className="logo-icon"></img>
      {user && (
        <button onClick={signout} className="logout-button">
          <img src={logout} alt="Log out" />
        </button>
      )}
    </div>
  );
};

export default Header;
