import { Link } from "react-router-dom";
import earth from "../../../asset/feature-stickers/Planet.png";

const ManageUser = () => {
  return (
    <div className="feature-card">
      <img src={earth} alt="Cartoon planet earth" />
      <div className="select-course-container">
        <p>Choose an action</p>
        <Link to="./add">
          <button className="button-style">Add user</button>
        </Link>
        <Link to="./edit">
          <button className="button-style">Edit user</button>
        </Link>
        <Link to="./delete">
          <button className="button-style">Delete user</button>
        </Link>
      </div>
    </div>
  );
};

export default ManageUser;
