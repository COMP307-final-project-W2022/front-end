import { useState } from "react";
import api, { query } from "../../../api";
import { useNavigate } from "react-router-dom";
import phone from "../../../asset/feature-stickers/Mobile.png";
import SplashScreen from "../../splashScreen";

const AddUser = () => {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [sid, setStudentId] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isStudent, setIsStudent] = useState(false);
  const [isProfessor, setIsProfessor] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [isTA, setIsTA] = useState(false);
  const [isSysop, setIsSysop] = useState(false);
  const navigate = useNavigate();

  const addUser = async () => {
    setIsLoading(true);
    try {
      await api.post("/user/register", {
        firstname,
        lastname,
        email,
        password,
        username,
        sid,
      });
    } catch (e) {
      console.error(e);
      setIsLoading(false);
      return;
    }

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

    return navigate("../manage/added", { replace: true });
  };

  if (isLoading) return <SplashScreen />;

  return (
    <div className="feature-card add-user">
      <img src={phone} alt="A hand holding a phone" />
      <div className="select-course-container">
        <p>Add new user</p>
        <form
          className="login-register register"
          onSubmit={(e) => {
            e.preventDefault();
            addUser();
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
                required
                onChange={(e) => setFirstname(e.target.value)}
              />
              <span>Enter first name here</span>
            </li>
            <li>
              <label htmlFor="lname">Last Name&#42;</label>
              <input
                type="text"
                name="lname"
                maxLength="100"
                autoComplete="off"
                required
                onChange={(e) => setLastname(e.target.value)}
              />
              <span>Enter last name here</span>
            </li>
            <li>
              <label htmlFor="email">McGill Email&#42;</label>
              <input
                type="email"
                name="email"
                maxLength="100"
                autoComplete="off"
                required
                onChange={(e) => setEmail(e.target.value)}
              />
              <span>Enter McGill email here</span>
            </li>
            <li>
              <label htmlFor="id">Student ID</label>
              <input
                type="text"
                name="id"
                maxLength="9"
                autoComplete="off"
                pattern="\d{9}"
                onChange={(e) => setStudentId(e.target.value)}
              />
              <span>Enter student ID here</span>
            </li>
            <li>
              <label htmlFor="uname">Username&#42;</label>
              <input
                type="text"
                name="username"
                maxLength="100"
                autocomplete="off"
                required
                onChange={(e) => setUsername(e.target.value)}
              />
              <span>Enter username here</span>
            </li>
            <li>
              <label htmlFor="password">Password&#42;</label>
              <input
                type="password"
                name="password"
                maxLength="100"
                autocomplete="off"
                required
                minLength={6}
                onChange={(e) => setPassword(e.target.value)}
              />
              <span>Enter password here</span>
            </li>
            <strong>
              <h2>Choose user type</h2>
            </strong>
            <div className="user-type">
              <div>
                <input
                  type="checkbox"
                  id="student"
                  name="student"
                  onChange={(e) => setIsStudent(e.target.checked)}
                />
                <label for="student"> Student</label>
              </div>
              <div>
                <input
                  type="checkbox"
                  id="professor"
                  name="professor"
                  onChange={(e) => setIsProfessor(e.target.checked)}
                />
                <label for="professor"> Professor</label>
              </div>
              <div>
                <input
                  type="checkbox"
                  id="ta"
                  name="ta"
                  onChange={(e) => setIsTA(e.target.checked)}
                />
                <label for="ta"> TA</label>
              </div>
              <div>
                <input
                  type="checkbox"
                  id="sysop"
                  name="sysop"
                  onChange={(e) => setIsSysop(e.target.checked)}
                />
                <label for="sysop"> System Operator</label>
              </div>
              <div>
                <input
                  type="checkbox"
                  id="admin"
                  name="admin"
                  onChange={(e) => setIsAdmin(e.target.checked)}
                />
                <label for="admin"> TA Administrator</label>
              </div>
            </div>
            <li>
              <input disabled={isLoading} type="submit" value="ADD" />
            </li>
          </ul>
        </form>
      </div>
    </div>
  );
};

export default AddUser;
