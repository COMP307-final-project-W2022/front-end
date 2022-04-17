import { Routes, Route, Link } from "react-router-dom";
import wish from "../../asset/feature-stickers/wish.png";
import magnify from "../../asset/feature-stickers/Magnifying Glass.png";
import book from "../../asset/feature-stickers/Brainstorming.png";
import computer from "../../asset/feature-stickers/KanbanBoard.png";

const user = "JOHN"
const TAadminFeature = (props) => {
    return (
      <div>
        <div className="rate-card" style={{ width:"40vw"}}>
          <h1>{props.title}</h1>
          <div className="feature-description" style={{ textAlign: "center" }}>{props.description}</div>
          <img width="150" height="150" src={props.image}></img>
          <br/>
          <Link to={props.path}>
          <button className="button-style">Go</button>
          </Link>
        </div>
      </div>
    );
  };

  const Greeting = () => {
    return (
      <div className="greet">
        Welcome, <br /> {user}
        < br/>
        Please Choose an Option
      </div>
    );
  };

const TaAdmin = () => {
    return (
        <div className="main dashboard-container">
        <Greeting />
        <Routes>
            <Route 
            path = "/taAdmin/options"
            element ={
                <div className="TAmanageFeatures">
                <TAadminFeature
                    title="QUICK IMPORT"
                    description="Import of TA Cohort using CSV File"
                    image={computer}
                    path=""
                />
                <br />
                <TAadminFeature
                    title="QUICK IMPORT"
                    description="Import of Course Quota using CSV file"
                    image = {computer}
                    path =""
                />
                <br />
                <TAadminFeature
                    title="TA WISHLIST"
                    description="View TA WishList for a Course"
                    image={wish}
                    path="/taAdmin/wishlist/select"
                />
                <br />
                <TAadminFeature
                    title="TA INFO/HISTORY"
                    description="View Information on TA"
                    image={magnify}
                    path="/taAdmin/info"
                />
                <br />
                <TAadminFeature
                    title="EDIT COURSE TAs"
                    description="Add and Remove TAs from a Course"
                    image={book}
                    path="/taAdmin/editta/select"
                />
            </div> } />
        </Routes>
        </div>
    );
};


export default TaAdmin;