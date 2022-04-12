import { Link } from "react-router-dom";

const Feature = (props) => {
  return (
    <div className="sysops-feature-card">
      <p className="sysops-title">{props.title}</p>
      <p className="sysops-description">{props.description}</p>
      <Link to={props.path}>
        <button className="button-style">{props.button}</button>
      </Link>
    </div>
  );
};

const Sysops = () => {
  return (
    <div className="sysop-container info">
      <h1>
        Hello, <br />
        System Operator!
      </h1>
      <div>
        {/* edit and delete will redirect to find user */}
        {/* add user will redirect to add user page */}
        <Feature
          title="Manage User"
          description="edit, delete, add user"
          path="/sysops/manage"
          button="manage"
        ></Feature>
        <br />
        <Feature
          title="Quick Import"
          description="quick import of profs and courses using CSV file"
          path="/sysops/import"
          button="import"
        ></Feature>
        <br />
        <Feature
          title="Manual Import"
          description="input professors and courses manually"
          path="/sysops/manual"
          button="add"
        ></Feature>
      </div>
    </div>
  );
};

export default Sysops;
