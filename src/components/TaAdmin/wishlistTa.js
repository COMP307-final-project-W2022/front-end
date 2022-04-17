import Select from "react-select";
import { colourOptions } from "../../asset/test-data.ts";
import { Routes, Route, Link } from "react-router-dom";

import book from "../../asset/feature-stickers/Brainstorming.png";
import characters from "../../asset/feature-stickers/Humans3Characters.png";

const professor = "John Lew"
const course = "COMP 250"
const term ="FALL2020"


const WishListView = () => {
    return (
        <div className="feature-card">
            <div style={{paddingRight:"100px"}}>
                <p> Professor: {professor} </p>
                <img style={{width:"300px", height:"300px", float:'centerr'}} src={characters}></img>
                <p> Course: {course} </p>
                 <p> Term: {term}</p>
            </div>
            <div>
                <p> Ta WishList </p>
                <table className="all-table">
                    <tr className="all-tr"> sup what is your name </tr> 
                    <tr className="all-tr"> sup my name is  </tr>
                    <tr className="all-tr"> sup </tr>
                    <tr className="all-tr"> sup </tr>
                    <tr className="all-tr"> sup </tr>
                    <tr className="all-tr"> sup </tr>
                </table>
            <br />
            <Link to="/taAdmin/wishlist/select">
                <button style={{float:"right" }} className="button-style">Back</button>
            </Link>
            </div>
        </div>
    );
};


const CourseTermSelection = () => {
    return (
        <div className="feature-card">
        <div>
        <p>Select Course and Term</p>     
        <img src={book} alt="A book" />
        </div>    
          <div className="select-course-container">
                <div className="select-term-container">
                    <div className ="term-year">
                        <p>Term</p>
                        <Select
                        className="select-term"
                        classNamePrefix="term"
                        isLoading={false}
                        isClearable={true}
                        isRtl={true}
                        isSearchable={true}
                        name="term"
                        options={colourOptions}
                        />
                    </div>
                    <div className = "term-year">
                        <p>Year</p>
                        <Select
                        className="select-year"
                        classNamePrefix="year"
                        isLoading={false}
                        isClearable={true}
                        isRtl={true}
                        isSearchable={true}
                        name="year"
                        options={colourOptions}
                        />
                    </div>
                </div>
                <div>
                    <p>Select a Course</p>
                    <Select
                    className="select-ta"
                    classNamePrefix="course"
                    isLoading={false}
                    isClearable={true}
                    isRtl={true}
                    isSearchable={true}
                    name="course"
                    options={colourOptions}
                    />
                    <Link to="/taAdmin/wishlist/view">
                        <button style={{float:'right'}} className="button-style">Go</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};


const TaWishlist = () => {
    return (
        <Routes>
            <Route path="/taAdmin/wishlist/select" element={<CourseTermSelection />}/> 
            <Route path="/taAdmin/wishlist/view" element={<WishListView />}/>
        </Routes>
    );
};

export default TaWishlist;