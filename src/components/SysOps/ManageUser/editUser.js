import Select from "react-select";
import dashboard from "../../../asset/feature-stickers/Office Supplies.png";
import SplashScreen from "../../splashScreen";
import { query } from "../../../api";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SearchUser = (props) => {
  const [users, setUsers] = useState(null);

  const getUsers = async () => {
    if (users != null) return;
    const _users = await query(
      "Select firstname, lastname, sid, username from users"
    );
    setUsers(_users);
  };

  getUsers();
  if (users == null)
    return (
      <div className="z-10 relative">
        <SplashScreen />
      </div>
    );

  return (
    <Select
      className="select-course edit-info"
      classNamePrefix="manage"
      isSearchable={true}
      options={users.map((user) => ({
        label: `${user.firstname} ${user.lastname}`,
        value: user,
      }))}
      onChange={(e) => props.userUpdated(e.value)}
    />
  );
};

const EditUser = () => {
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const navigator = useNavigate();

  const saveUser = async () => {
    setIsLoading(true);
    try {
      await query(
        `Update users set firstname = '${user.firstname}', lastname = '${user.lastname}', sid = '${user.sid}' where username = '${user.username}'`
      );
      return navigator("../manage/edited", { replace: true });
    } catch {
      alert("Could not edit user");
    }
    setIsLoading(false);
  };

  if (isLoading) return <SplashScreen />;

  return (
    <div className="feature-card">
      <img src={dashboard} alt="Computer Dashboard" className="hidden-mobile"/>
      <div className="delete-container relative">
        <p>Edit User</p>
        <SearchUser
          userUpdated={(user) => {
            setUser(user);
          }}
        />
        <form
          className="login-register register"
          onSubmit={(e) => {
            e.preventDefault();
            saveUser();
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
                value={user.firstname}
                onChange={(e) =>
                  setUser({ ...user, firstname: e.target.value })
                }
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
                value={user.lastname}
                onChange={(e) => setUser({ ...user, lastname: e.target.value })}
              />
              <span>Enter last name here</span>
            </li>
            <li>
              <label htmlFor="id">Student ID</label>
              <input
                type="text"
                name="id"
                maxLength="9"
                autoComplete="off"
                pattern="\d{9}"
                value={user.sid}
                onChange={(e) => setUser({ ...user, sid: e.target.value })}
              />
              <span>Enter student ID here</span>
            </li>
            <li>
              <input
                disabled={!user || Object.keys(user).length === 0 || isLoading}
                className="button-style z-0 relative"
                type="submit"
                value="Save"
              />
            </li>
          </ul>
          <br />
        </form>
        <br />
      </div>
    </div>
  );
};

export default EditUser;
