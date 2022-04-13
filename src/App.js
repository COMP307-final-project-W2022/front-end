import "./App.css";
import { Route, Routes } from "react-router-dom";
import bg from "./asset/background.png";
import React, { useState } from "react";
import TaManagement from "./components/taManagement";

import TaAdmin from "./components/taAdmin"
import TaWishlist from "./components/wishlistTa"


import Login from "./components/login";
import Header from "./components/header";
import Information from "./components/information";
import Register from "./components/register";
import UserTypeSelection from "./components/usertypeselection";
import CourseType from "./components/courseType";

import Sysops from "./components/SysOps/sysops";

import Footer from "./components/footer";
import RestrictedRoute from "./components/restrictedRoute";
import SplashScreen from "./components/splashScreen";
import { getAuth } from "firebase/auth";
import Dashboard from "./components/dashboard";

function App() {
  const [user, setUser] = useState(undefined);
  getAuth().onAuthStateChanged((_user) => {
    if (user != null) return;
    setUser(_user);
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
            <div className="main">
              <Information />
              <RestrictedRoute
                user={user}
                auth={false}
                redirectTo={"/dashboard"}
              />
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
          <Route path="/dashboard/*" element={<Dashboard />} />
          <Route path="/type" element={<UserTypeSelection />} />
          <Route path="/taManagement/*" element={<TaManagement />} />
          <Route path="/sysops/*" element={<Sysops />} />
          <Route path="/courseAssociation/*" element={<CourseType />} />
        </Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
