import Select from "react-select";
import { colourOptions } from "../../asset/test-data.ts";
import { Routes, Route, Link } from "react-router-dom";
import book from "../../asset/feature-stickers/Brainstorming.png";

const course="COMP250"
const term="FALL2020"

const CourseTaSelection = () => {
    return (
        <div className="feature-card"> 
         <div>
            <p>Current List of TAs</p>
            <table className="all-table">
                <tr className="all-tr"> sup what is your name </tr> 
                <tr className="all-tr"> sup my name is  </tr>
                <tr className="all-tr"> sup </tr>
                <tr className="all-tr"> sup </tr>
                <tr className="all-tr"> sup </tr>
                <tr className="all-tr"> sup </tr>
                <tr className="all-tr"> sup </tr>
                <tr className="all-tr"> sup </tr>
                <tr className="all-tr"> how arr you </tr>
            </table>
                <br />
                <p style={{marginBottom:"1vh"}}>  Course: {course} </p>
                <p> Term: {term} </p>      
            </div>
            <div>
            <p> Select a TA</p>
                <Select
                    className="select-ta"
                    classNamePrefix="ta"
                    isLoading={false}
                    isClearable={true}
                    isRtl={true}
                    isSearchable={true}
                    name="TA"
                    options={colourOptions}
                    isMulti={true}
                    />
                <br/>
                <div style={{display: 'flex', flexDirection: 'column', marginTop:'25vh'}}>
                    <div>
                        <button style={{float:"right", marginLeft:"10px"}} className="button-style">Remove</button>
                        <button style={{float:"right"}} className="button-style">Add</button>
                    </div>
                    <br />
                    <Link to="/taAdmin/editta/select">
                        <button style={{float:"right"}} className="button-style">Back</button>
                    </Link>
                </div>
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
                    <Link to="/taAdmin/editta/courseta">
                        <button style={{float:"right"}} className="button-style">Go</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};


const EditTa = () => {
    return (
        <Routes>
            <Route path="/taAdmin/editta/select" element={<CourseTermSelection />}/>
            <Route path="/taAdmin/editta/courseta" element ={<CourseTaSelection />}/>
        </Routes>
    );
};

export default EditTa;