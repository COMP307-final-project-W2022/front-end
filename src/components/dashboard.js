import { Routes, Route, Link } from "react-router-dom";

const user = "user name";

const Greeting = () => {
  return (
    <div className="greet">
      Welcome, <br /> {user}
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
  return (
    <div className="main dashboard-container">
      <Greeting />
      <Routes>
        <Route
          path="/student"
          element={
            <DashboardFeature
              title="Rate a TA"
              link="/taManagement/taPerformance"
              description="Rate any TAs from your registered courses anonymously. You will leave a
            rating on the scale of 0 to 5. Optionally, you can leave a short
            review of 100 words and less."
            />
          }
        />
        <Route
          path="/staff"
          element={
            <div>
              <DashboardFeature
                title="Rate a TA"
                link="/taManagement/taPerformance"
                description="Rate any TAs from your registered courses anonymously. You will leave a
              rating on the scale of 0 to 5. Optionally, you can leave a short
              review of 100 words and less."
              />
              <br />
              <DashboardFeature
                title="TA Management"
                link="/taManagement/options"
                description="Exercitation velit ullamco anim laborum ullamco non. Duis in id aute commodo culpa irure irure incididunt enim aliquip officia."
              />
            </div>
          }
        />
        <Route
          path="/admin"
          element={
            <div>
              <DashboardFeature
                title="Rate a TA"
                link="/taManagement/taPerformance"
                description="Rate any TAs from your registered courses anonymously. You will leave a
              rating on the scale of 0 to 5. Optionally, you can leave a short
              review of 100 words and less."
              />
              <br />
              <DashboardFeature
                title="TA Management"
                link="/taManagement/options"
                description="Exercitation velit ullamco anim laborum ullamco non. Duis in id aute commodo culpa irure irure incididunt enim aliquip officia."
              />
              <br />
              <DashboardFeature
                title="TA Administration"
                link="/dashboard/admin"
                description="Exercitation velit ullamco anim laborum ullamco non. Duis in id aute commodo culpa irure irure incididunt enim aliquip officia."
              />
            </div>
          }
        />
        <Route
          path="/sysop"
          element={
            <div>
              <DashboardFeature
                title="Rate a TA"
                link="/taManagement/taPerformance"
                description="Rate any TAs from your registered courses anonymously. You will leave a
              rating on the scale of 0 to 5. Optionally, you can leave a short
              review of 100 words and less."
              />
              <br />
              <DashboardFeature
                title="TA Management"
                link="/taManagement/options"
                description="Exercitation velit ullamco anim laborum ullamco non. Duis in id aute commodo culpa irure irure incididunt enim aliquip officia."
              />
              <br />
              <DashboardFeature
                title="TA Administration"
                link="/dashboard/sysop"
                description="Exercitation velit ullamco anim laborum ullamco non. Duis in id aute commodo culpa irure irure incididunt enim aliquip officia."
              />
              <br />
              <DashboardFeature
                title="System Operations"
                link="/sysops"
                description="Exercitation velit ullamco anim laborum ullamco non. Duis in id aute commodo culpa irure irure incididunt enim aliquip officia."
              />
            </div>
          }
        />
      </Routes>
    </div>
  );
};

export default Dashboard;
