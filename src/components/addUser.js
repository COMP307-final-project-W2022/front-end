import phone from "../asset/feature-stickers/Mobile.png";

const AddUser = () => {
  return (
    <div className="feature-card add-user">
      <img src={phone} alt="A hand holding a phone" />
      <div className="select-course-container">
        <p>Add new user</p>
        <form className="login-register register">
          <ul>
            <li>
              <label htmlFor="fname">First Name&#42;</label>
              <input
                type="text"
                name="fname"
                maxLength="100"
                autoComplete="off"
                required
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
              />
              <span>Enter student ID here</span>
            </li>
            <li>
              <label htmlFor="uname">Username&#42;</label>
              <input
                type="text"
                name="username"
                maxLength="100"
                autoComplete="off"
                required
              />
              <span>Enter username here</span>
            </li>
            <li>
              <label htmlFor="password">Password&#42;</label>
              <input
                type="password"
                name="password"
                maxLength="100"
                autoComplete="off"
                required
              />
              <span>Enter password here</span>
            </li>
            <strong>
              <h2>Choose user type</h2>
            </strong>
            <div className="user-type">
              <div>
                <input type="checkbox" id="student" name="student" checked />
                <label for="student"> Student</label>
              </div>
              <div>
                <input type="checkbox" id="professor" name="professor" />
                <label for="professor"> Professor</label>
              </div>
              <div>
                <input type="checkbox" id="ta" name="ta" />
                <label for="ta"> TA</label>
              </div>
              <div>
                <input type="checkbox" id="sysop" name="sysop" />
                <label for="sysop"> System Operator</label>
              </div>
              <div>
                <input type="checkbox" id="admin" name="admin" />
                <label for="admin"> TA Administrator</label>
              </div>
            </div>
            <li>
              <input type="submit" value="ADD" />
            </li>
          </ul>
        </form>
      </div>
    </div>
  );
};

export default AddUser;
