import { getAuth } from "firebase/auth";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { query } from "../api";
import SplashScreen from "./splashScreen";

const Greeting = (params) => {
  if (params.user == null) return null;

  return (
    <div className="greet">
      Welcome, <br /> {params.user.displayName}
    </div>
  );
};

const DashboardFeature = (props) => {
  return (
    <div>
      <div className="rate-card">
        <h1>{props.title}</h1>
        <div className="feature-description" style={{ textAlign: "center" }}>
          {props.description}
        </div>
        <Link to={props.link}>
          <button>Go</button>
        </Link>
      </div>
    </div>
  );
};

const Dashboard = () => {
  const [user, setUser] = useState(undefined);
  const [roles, setRoles] = useState(null);
  const navigate = useNavigate();

  getAuth().onAuthStateChanged((user) => {
    setUser(user);
  });

  if (user == null) return null;

  const getRoles = async () => {
    if (roles != null) return;
    const isStudent =
      (await query(`select * from students where username = '${user.uid}'`))
        .length > 0;
    const isTA =
      (await query(`select * from ta where username = '${user.uid}'`)).length >
      0;
    const isProf =
      (await query(`select * from professors where username = '${user.uid}'`))
        .length > 0;
    const isTaAdmin =
      (await query(`select * from tadmin where username = '${user.uid}'`))
        .length > 0;
    const isSysop =
      (await query(`select * from sysop where username = '${user.uid}'`))
        .length > 0;
    const _roles = [];
    if (isStudent) _roles.push("Student");
    if (isTA) _roles.push("TA");
    if (isProf) _roles.push("Professor");
    if (isTaAdmin) _roles.push("admin");
    if (isSysop) _roles.push("Sysop");
    setRoles(_roles);
    if (_roles.length === 0) {
      return navigate("/type", { replace: true });
    }
  };

  getRoles();

  if (roles == null) return <SplashScreen />;

  return (
    <div className="main dashboard-container">
      <Greeting user={user} />
      <div>
        <DashboardFeature
          title="Rate a TA"
          link="/taManagement/rate/select"
          description="Rate any TAs from your registered courses anonymously. You will leave a
              rating on the scale of 0 to 5. Optionally, you can leave a short
              review of 100 words and less."
        />
        <br />
        {(roles.includes("TA") ||
          roles.includes("Professor") ||
          roles.includes("admin") ||
          roles.includes("Sysop")) && (
          <DashboardFeature
            title="TA Management"
            link="/taManagement/options"
            description="Exercitation velit ullamco anim laborum ullamco non. Duis in id aute commodo culpa irure irure incididunt enim aliquip officia."
          />
        )}
        <br />
        {(roles.includes("admin") || roles.includes("Sysop")) && (
          <DashboardFeature
            title="TA Administration"
            link="/dashboard/sysop"
            description="Exercitation velit ullamco anim laborum ullamco non. Duis in id aute commodo culpa irure irure incididunt enim aliquip officia."
          />
        )}
        <br />
        {roles.includes("Sysop") && (
          <DashboardFeature
            title="System Operations"
            link="/sysops"
            description="Manage User information: adding, editing, or deleting users. Import new courses, or new professors by uploading a CSV file or manually."
          />
        )}
      </div>
    </div>
  );
};

export default Dashboard;
