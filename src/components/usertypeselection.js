import { getAuth } from "firebase/auth";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { query } from "../api";
import SplashScreen from "./splashScreen";

const UserTypeSelection = () => {
  const [isStudent, setIsStudent] = useState(false);
  const [isProfessor, setIsProfessor] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [isTA, setIsTA] = useState(false);
  const [isSysop, setIsSysop] = useState(false);
  const [user, setUser] = useState(undefined);
  const navigate = useNavigate();

  getAuth().onAuthStateChanged((_user) => {
    if (user != null) return;
    setUser(_user);
  });

  if (user === undefined) {
    return <SplashScreen />;
  }

  const username = user.uid;

  const saveUserType = async () => {
    if (isStudent) {
      await query(`insert into students values ('${username}')`).catch((e) =>
        console.log(e)
      );
    }

    if (isTA) {
      await query(`insert into ta values ('${username}')`).catch((e) =>
        console.log(e)
      );
    }

    if (isProfessor) {
      await query(`insert into professors values ('${username}')`).catch((e) =>
        console.log(e)
      );
    }

    if (isAdmin) {
      await query(`insert into tadmin values ('${username}')`).catch((e) =>
        console.log(e)
      );
    }

    if (isSysop) {
      await query(`insert into sysop values ('${username}')`).catch((e) =>
        console.log(e)
      );
    }

    return navigate("/dashboard", { replace: true });
  };

  return (
    <div className="type-card max-w-xl mx-auto">
      <h1>Please identity yourself</h1>
      <p>I am a ...</p>
      <br />
      <div>
        <input
          type="checkbox"
          id="student"
          name="student"
          value="Student"
          onChange={(e) => setIsStudent(e.target.value)}
        />
        <label htmlFor="student"> Student</label>
      </div>
      <div>
        <input
          type="checkbox"
          id="ta"
          name="ta"
          value="TA"
          onChange={(e) => setIsTA(e.target.value)}
        />
        <label htmlFor="ta"> Teacher Assistant</label>
      </div>
      <div>
        <input
          type="checkbox"
          id="prof"
          name="prof"
          value="Professor"
          onChange={(e) => setIsProfessor(e.target.value)}
        />
        <label htmlFor="prof"> Professor</label>
      </div>
      <div>
        <input
          type="checkbox"
          id="sysop"
          name="sysop"
          value="Sysop"
          onChange={(e) => setIsSysop(e.target.value)}
        />
        <label htmlFor="sysop"> System Operator</label>
      </div>
      <div>
        <input
          type="checkbox"
          id="admin"
          name="admin"
          value="TA Administrator"
          onChange={(e) => setIsAdmin(e.target.value)}
        />
        <label htmlFor="admin"> TA Administrator</label>
      </div>
      <input
        onClick={() => {
          saveUserType();
        }}
        className="type-submit"
        type="submit"
        value="NEXT"
      />
    </div>
  );
};

export default UserTypeSelection;
