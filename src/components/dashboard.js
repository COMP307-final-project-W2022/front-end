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
        <div className="feature-description" style={{ textAlign: "center" }}>{props.description}</div>
        <Link to="/dashboard/rate">
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
          path="/dashboard/student"
          element={
            <DashboardFeature
              title="Rate a TA"
              description="Rate any TAs from your registered courses anonymously. You will leave a
            rating on the scale of 0 to 5. Optionally, you can leave a short
            review of 100 words and less."
            />
          }
        />
        <Route
          path="/dashboard/staff"
          element={
            <div>
              <DashboardFeature
                title="Rate a TA"
                description="Rate any TAs from your registered courses anonymously. You will leave a
              rating on the scale of 0 to 5. Optionally, you can leave a short
              review of 100 words and less."
              />
              <br />
              <DashboardFeature
                title="TA Management"
                description="Exercitation velit ullamco anim laborum ullamco non. Duis in id aute commodo culpa irure irure incididunt enim aliquip officia."
              />
            </div>
          }
        />
        <Route
          path="/dashboard/admin"
          element={
            <div>
              <DashboardFeature
                title="Rate a TA"
                description="Rate any TAs from your registered courses anonymously. You will leave a
              rating on the scale of 0 to 5. Optionally, you can leave a short
              review of 100 words and less."
              />
              <br />
              <DashboardFeature
                title="TA Management"
                description="Exercitation velit ullamco anim laborum ullamco non. Duis in id aute commodo culpa irure irure incididunt enim aliquip officia."
              />
              <br />
              <DashboardFeature
                title="TA Administration"
                description="Exercitation velit ullamco anim laborum ullamco non. Duis in id aute commodo culpa irure irure incididunt enim aliquip officia."
              />
            </div>
          }
        />
        <Route
          path="/dashboard/sysop"
          element={
            <div>
              <DashboardFeature
                title="Rate a TA"
                description="Rate any TAs from your registered courses anonymously. You will leave a
              rating on the scale of 0 to 5. Optionally, you can leave a short
              review of 100 words and less."
              />
              <br />
              <DashboardFeature
                title="TA Management"
                description="Exercitation velit ullamco anim laborum ullamco non. Duis in id aute commodo culpa irure irure incididunt enim aliquip officia."
              />
              <br />
              <DashboardFeature
                title="TA Administration"
                description="Exercitation velit ullamco anim laborum ullamco non. Duis in id aute commodo culpa irure irure incididunt enim aliquip officia."
              />
              <br />
              <DashboardFeature
                title="System Operations"
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
