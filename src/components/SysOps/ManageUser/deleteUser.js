import Select from "react-select";
import plane from "../../../asset/feature-stickers/Paper Airplane.png";

const name = "John Smith";
const email = "email@mcgill.ca";
const mid = "260123123";
const type = "TA";

const DeleteUser = () => {
  return (
    <div className="feature-card">
      <img src={plane} alt="Paper Airplane" />
      <div className="delete-container">
        <p>Delete User</p>
        <h2>User Information</h2>
        <h3>{name}</h3>
        <h3>{email}</h3>
        <h3>{mid}</h3>
        <h3>{type}</h3>
        <div className="delete-btns">
          <button className="button-style">Delete</button>
          <br />
          <button className="button-style">Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default DeleteUser;
