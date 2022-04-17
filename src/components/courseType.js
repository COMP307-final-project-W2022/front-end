const Choices = () => {
  return (
    <div>
      <input type="radio" id="student" name="course-type" value="student" />
      <label htmlFor="student"> student</label>
      <br />
      <input type="radio" id="ta" name="course-type" value="ta" />
      <label htmlFor="ta"> TA</label>
      <br />
      <input type="radio" id="prof" name="course-type" value="prof" />
      <label htmlFor="prof"> Professor</label>
    </div>
  );
};

const CourseType = () => {
  const course1 = "COMP 301";
  const course2 = "COMP 302";
  const course3 = "COMP 303";
  const course4 = "COMP 304";

  return (
    <div className="feature-card course-type-container">
      <div className="course-list-container">
        <div className="type-select-container">
          {course1}
          <Choices />
        </div>
        <div className="type-select-container">
          {course4} <Choices />
        </div>
        <div className="type-select-container">
          {course3} <Choices />
        </div>
        <div className="type-select-container">
          {course2} <Choices />
        </div>
      </div>
    </div>
  );
};

export default CourseType;
