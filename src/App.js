import "./App.css";
import { Route, Routes } from "react-router-dom";
import bg from "./asset/background.png";
import React, { useState } from "react";

import Login from "./components/login";
import Header from "./components/header";
import Information from "./components/information";
import Register from "./components/register";
import UserTypeSelection from "./components/usertypeselection";
import CourseAssociation from "./components/coursesassociation";
import Footer from "./components/footer";
import RestrictedRoute from "./components/restrictedRoute";
import SplashScreen from "./components/splashScreen";
import { getAuth } from "firebase/auth";

function App() {
  const [user, setUser] = useState(undefined);
  getAuth().onAuthStateChanged((user) => {
    setUser(user);
  });

  if (user === undefined) {
    return <SplashScreen />;
  }

  return (
    <div className="App" style={{ background: `url(${bg})` }}>
      <Header />
      <div className="main">
        <Information />
        <Routes>
          <Route
            exact
            path="/"
            element={
              <RestrictedRoute user={user} auth={false} redirectTo={"/type"} />
            }
          >
            <Route path="/" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Route>
          <Route
            exact
            path="/"
            element={
              <RestrictedRoute user={user} auth={true} redirectTo={"/"} />
            }
          >
            <Route path="/type" element={<UserTypeSelection />} />
            <Route path="/course" element={<CourseAssociation />} />
          </Route>
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
