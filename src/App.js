import "./App.css";
import { Route, Routes } from "react-router-dom";
import bg from "./asset/background.png";
import React, { useState } from "react";
import TaManagement from "./components/taManagement";

import Login from "./components/login";
import Header from "./components/header";
import Information from "./components/information";
import Register from "./components/register";
import UserTypeSelection from "./components/usertypeselection";
import CourseAssociation from "./components/coursesassociation";

import Sysops from "./components/SysOps/sysops";

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
      <Routes>
        <Route
          exact
          path="/"
          element={
            <div class="main">
              <Information />
              <RestrictedRoute user={user} auth={false} redirectTo={"/type"} />
            </div>
          }
        >
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Route>
        <Route
          exact
          path="/"
          element={
            <div className="w-full px-20">
              <RestrictedRoute user={user} auth={true} redirectTo={"/"} />
            </div>
          }
        >
          <Route path="/type" element={<UserTypeSelection />} />
          <Route path="/course" element={<CourseAssociation />} />
          <Route path="/taManagement/*" element={<TaManagement />} />
          <Route path="/sysops/*" element={<Sysops />} />
        </Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
