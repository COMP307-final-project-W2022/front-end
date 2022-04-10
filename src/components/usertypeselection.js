const UserTypeSelection = () => {
  return (
    <div className="type-card">
      <h1>Please identity yourself</h1>
      <p>I am a ...</p>
      <br />
      <div>
        <input type="checkbox" id="student" name="student" value="Student" />
        <label htmlFor="student"> Student</label>
      </div>
      <div>
        <input type="checkbox" id="ta" name="ta" value="TA" />
        <label htmlFor="ta"> Teacher Assistant</label>
      </div>
      <div>
        <input type="checkbox" id="prof" name="prof" value="Professor" />
        <label htmlFor="prof"> Professor</label>
      </div>
      <div>
        <input type="checkbox" id="sysop" name="sysop" value="Sysop" />
        <label htmlFor="sysop"> System Operator</label>
      </div>
      <div>
        <input
          type="checkbox"
          id="admin"
          name="admin"
          value="TA Administrator"
        />
        <label htmlFor="admin"> TA Administrator</label>
      </div>
      <input className="type-submit" type="submit" value="NEXT" />
    </div>
  );
};

export default UserTypeSelection;
