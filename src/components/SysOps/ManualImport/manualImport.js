import { Link } from "react-router-dom";
import coffee from "../../../asset/feature-stickers/Cup of Coffee.png";

const ManualImport = () => {
  return (
    <div className="feature-card">
      <img src={coffee} alt="Mail" className="hidden-mobile" />
      <div className="manual-options-container">
        <Link to="/sysops/manual/course">
          <button className="button-style">Add Course</button>
        </Link>
        <br />
        <Link to="/sysops/manual/prof">
          <button className="button-style">Add Professor</button>
        </Link>
      </div>
    </div>
  );
};

export default ManualImport;
