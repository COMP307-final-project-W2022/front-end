import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Select from "react-select";
import api, { query } from "../../../api";
import plane from "../../../asset/feature-stickers/Paper Airplane.png";
import SplashScreen from "../../splashScreen";

const SearchUser = (props) => {
  const [users, setUsers] = useState(null);

  const getUsers = async () => {
    if (users != null) return;
    const _users = await query(
      "Select firstname, lastname, email, sid, username from users"
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
const DeleteUser = () => {
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const navigator = useNavigate();

  const deleteUser = async () => {
    setIsLoading(true);
    try {
      await api.delete(`/user/${user.username}`);
      return navigator("../manage/deleted", { replace: true });
    } catch {
      alert("Could not delete user");
    }
    setIsLoading(false);
  };

  if (isLoading)
    return (
      <div className="z-10 relative">
        <SplashScreen />
      </div>
    );

  return (
    <div className="feature-card">
      <img src={plane} alt="Paper Airplane" className="hidden-mobile"/>
      <div className="delete-container">
        <p>Delete User</p>
        <SearchUser
          userUpdated={(user) => {
            setUser(user);
          }}
        />
        <h2>User Information</h2>
        <h3>{user.firstname}</h3>
        <h3>{user.email}</h3>
        <h3>{user.sid}</h3>
        <div className="delete-btns">
          <button
            disabled={!user || Object.keys(user).length === 0 || isLoading}
            onClick={() => deleteUser()}
            className="button-style"
          >
            Delete
          </button>
          <br />
          <Link to="../">
            <button className="button-style">Cancel</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DeleteUser;
