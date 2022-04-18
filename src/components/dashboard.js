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
    <div className="dashboard-feature">
      <div className="rate-card h-full">
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

    if (_roles.length === 0) {
      return navigate("/type", { replace: true });
    } else {
      const courseCount = await query(
        `select count(*) from courseusers where username = '${user.uid}'`
      );
      if (courseCount[0]["count"] === "0")
        return navigate("/courseAssociation", { replace: true });
    }

    setRoles(_roles);
  };

  getRoles();

  if (roles == null) return <SplashScreen />;

  return (
    <div className="flex flex-col">
      <Greeting user={user} />
      <div className="w-full flex flex-row gap-5 flex-wrap space-around">
        <DashboardFeature
          title="Rate a TA"
          link="/taManagement/rate/select"
          description="Add a rating for a TA anonymously."
        />
        {(roles.includes("TA") ||
          roles.includes("Professor") ||
          roles.includes("admin") ||
          roles.includes("Sysop")) && (
          <DashboardFeature
            title="TA Management"
            link="/taManagement/options"
            description="See TA office hours, add TAs to wishlist and grade TA performance."
          />
        )}
        {(roles.includes("admin") || roles.includes("Sysop")) && (
          <DashboardFeature
            title="TA Administration"
            link="/taAdmin/options"
            description="Import TA, see TA history, add TA to course and more."
          />
        )}
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
