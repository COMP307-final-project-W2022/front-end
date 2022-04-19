import Select from "react-select";
import { Routes, Route, Link, Navigate, useNavigate } from "react-router-dom";
import book from "../../asset/feature-stickers/Brainstorming.png";
import { query } from "../../api";
import { useState } from "react";
import SplashScreen from "../splashScreen";
import Success from "../success";

let courseCode=null
let term=null
let courseTa = []
let allTa = []
let selectedTa = []

const CourseTaSelection = () => {
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    const addTa = async () => {
        setIsLoading(true);
        try {
            if (selectedTa == null || selectedTa.length==0) return;
            let result = true;
            let courseChoice = false;
            for(let i=0; i<selectedTa.length; i++) {
                courseChoice = await query (`select exists (select * from courseinfo where cid='${courseCode}' and term='${term}')`);
                if(courseChoice[0].exists == false) {
                    alert("No such course");
                    return navigate("../select" ,{replace:true});
                }
                result = await query(`select exists (select * from courseusers where cid='${courseCode}' and term='${term}' and username='${selectedTa[i].username}' and usertype='TA')`);
                if(result[0].exists == false && courseChoice[0].exists == true ){
                    console.log("works")
                    await query (`insert into courseusers (cid, term, username, usertype) values ('${courseCode}', '${term}', '${selectedTa[i].username}', 'TA')`);
                }
            }
            alert("Added TAs!");

        } catch {
            alert ("Could not add selected TAs");
        }
        setIsLoading(false);
    };

    const removeTa = async () => {
        setIsLoading(true);
        try {
            if (selectedTa == null || selectedTa.length==0) return;
            let result = false;
            for(let i=0; i<selectedTa.length; i++) {
                result = await query(`select exists (select * from courseusers where cid='${courseCode}' and term='${term}' and username='${selectedTa[i].username}' and usertype='TA')`);
                if(result[0].exists == true){
                    await query (`delete from courseusers where cid='${courseCode}' and term='${term}' and  username='${selectedTa[i].username}' and usertype='TA'`);
                }
            }
            alert("Removed TAs!")
        } catch {
            alert ("Could not remove selected TAs");
        }
        setIsLoading(false);
    };

    return (
        <div className="feature-card"> 
         <div>
            <p>Current List of TAs</p>
            <table className="all-table">
                <tbody>
                    {courseTa.map((tupples,i) => {
                        return (
                            <tr key={i} className="all-tr"><td>{tupples.firstname} {tupples.lastname}</td></tr>
                        )
                    })}
                </tbody>
            </table>
                <br />
                <p style={{marginBottom:"1vh"}}>  Course: {courseCode} </p>
                <p> Term: {term} </p>      
            </div>
            <div>
            <p> Select a TA</p>
                <Select
                    className="select-ta"
                    classNamePrefix="ta"
                    isClearable={true}
                    isSearchable={true}
                    name="TA"
                    options={allTa.map((ta) => {
                        return {
                            label: `${ta.firstname} ${ta.lastname}`,
                            value: {
                                firstname: ta.firstname,
                                lastname: ta.lastname,
                                username: ta.username,
                            },
                        };
                    })}
                    isMulti={true}
                    onChange={(e) => {
                        selectedTa = []
                        for (let i=0; i<e.length; i++) {
                            selectedTa.push(e[i].value);
                        }
                        console.log(selectedTa);
                    }}
                    />
                <br/>
                <p id="displayedit"></p>
                <div style={{display: 'flex', flexDirection: 'column', marginTop:'25vh'}}>
                    <div>
                        <button style={{float:"right", marginLeft:"10px"}} 
                            className="button-style"
                            onClick={removeTa}>Remove</button>
                        <button style={{float:"right"}} 
                        className="button-style"
                        onClick={addTa}>Add</button>
                    </div>
                    <br />
                    <Link to="../submitted"> 
                    <button className="button-style" style={{float:'right'}}  >
                        Done
                    </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};


const CourseTermSelection = () => {

    const [courses, setCourses] = useState(null);
    const [terms, setTerms] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    const getCoursesAndTerms = async () => {
        if(terms != null) return;
        const _terms = await query(
            "select distinct term from courseinfo order by term");
        setTerms(_terms);

        if(courses != null) return;
        const _courses = await query(
            "select distinct cid from courseinfo order by cid"
        );
        setCourses(_courses);
    };

    getCoursesAndTerms();

    if(courses == null || terms == null) return <SplashScreen />
    
    const viewCourseTa = async () => {     
        setIsLoading(true);
      
        try {

            const _courseTa = await query(
                `select firstname, lastname from users where username in ( select username from courseusers where usertype = 'TA' and cid='${courseCode}' and term='${term}') order by firstname;`
            );
            if(_courseTa == null) return  <SplashScreen />
            courseTa = _courseTa
            
            const _allta = await query(
                `select firstname, lastname, username from users where username in ( select username from ta )`
            );
            if(_allta == null) return  <SplashScreen />
            allTa = _allta
            console.log(allTa)

            return navigate("../courseta", {replace: true});
        } 
        catch {
            alert("Problem")
        }

        setIsLoading(false);
    };


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
                        onChange={(e) => {
                            term = e.value.term;
                        }}
                        options={terms.map((term) => {
                            return {
                                label: `${term.term}`,
                                value: {
                                    term: term.term,
                                },
                            };
                        })}
                        />
                    </div>
                </div>
                <div>
                    <p>Select a Course</p>
                    <Select
                    className="select-ta"
                    classNamePrefix="course"
                    isClearable={true}
                    isSearchable={true}
                    name="course"
                    onChange={(e) => {
                        courseCode = e.value.cid;
                    }}
                    options={courses.map((course) => {
                        return {
                            label: `${course.cid}`,
                            value: {
                                cid: course.cid,
                            },
                        };
                    })}
                    />
                        <button 
                        disabled ={isLoading}
                        style={{float:'right'}} 
                        className="button-style"
                        onClick={viewCourseTa}> Go</button>
                         <Link to="/taAdmin/options">
                                <button style={{float:"right" }} className="button-style">Back</button>
                        </Link>
                </div>
            </div>
        </div>
    );
};


const EditTa = () => {
    return (
        <Routes>
            <Route path="/select" element={<CourseTermSelection />}/>
            <Route path="/courseta" element ={<CourseTaSelection />}/>
            <Route
          path="/submitted"
          element={
            <Success
              btn1="GO BACK TO OPTIONs"
              btn2="GO BACK TO DASHBOARD"
              location1="../../options"
              location2="../../../dashboard"
            />
          }
        ></Route>
        </Routes>
    );
};

export default EditTa;