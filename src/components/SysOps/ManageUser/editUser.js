import Select from "react-select";
import { Link } from "react-router-dom";
import dashboard from "../../../asset/feature-stickers/Office Supplies.png";
import { editUserOptions } from "../../../asset/selections.ts";

const name = "John Smith";
const email = "email@mcgill.ca";
const mid = "260123123";
const type = "TA";

const DeleteUser = () => {
  return (
    <div className="feature-card">
      <img src={dashboard} alt="Computer Dashboard" />
      <div className="delete-container">
        <p>Edit User</p>
        <h2>User Information</h2>
        <h3>{name}</h3>
        <h3>{email}</h3>
        <h3>{mid}</h3>
        <h3>{type}</h3>
        <br />
        <h2>What would you like to edit?</h2>
        <Select
          className="select-course edit-info"
          classNamePrefix="manage"
          isLoading={false}
          isClearable={true}
          isRtl={true}
          isSearchable={true}
          name="choices"
          options={editUserOptions}
        />
        <form className="login-register register edit-input">
          <ul>
            <li>
              <label htmlFor="fname">Input&#42;</label>
              <input
                type="text"
                name="fname"
                maxLength="100"
                autoComplete="off"
                required
              />
              <span>Enter new information here</span>
            </li>
            <li>
              <input className="button-style" type="submit" value="Edit" />
            </li>
          </ul>
        </form>
      </div>
    </div>
  );
};

export default DeleteUser;
