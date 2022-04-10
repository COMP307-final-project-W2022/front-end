import "./App.css";
import { Routes, Route } from "react-router-dom";
import bg from "./asset/background.png";

import Login from "./components/login";
import Header from "./components/header";
import Information from "./components/information";
import Register from "./components/register";
import UserTypeSelection from "./components/usertypeselection";
import CourseAssociation from "./components/coursesassociation";
import Footer from "./components/footer";

function App() {
  return (
    <div className="App" style={{ background: `url(${bg})` }}>
      <Header />
      <div className="main">
        <Information />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/type" element={<UserTypeSelection />} />
          <Route path="/course" element={<CourseAssociation />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
