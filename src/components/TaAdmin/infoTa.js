import Select from "react-select";
import { colourOptions } from "../../asset/test-data.ts";
import { Routes, Route, Link, Navigate, useNavigate } from "react-router-dom";
import magnify from "../../asset/feature-stickers/Magnifying Glass.png";
import checklist from "../../asset/feature-stickers/Checklist.png";
import wish from "../../asset/feature-stickers/wish.png";
import { query } from "../../api";
import { useState } from "react";
import SplashScreen from "../splashScreen";
import { formControlUnstyledClasses } from "@mui/base";
import { teardown } from "@mui/utils/useIsFocusVisible";


let taUsername = null;
let name = null;
let cid = null;
let term = null;
let remarkcid = null;
let remarkterm = null;

const StudentRemarks = () => {

    const [remarks, setRemarks] = useState(null);

    const getRemarks = async () => {
        if(remarks !=null) return;
        const q = `select tcomment from tarating where tusername='${taUsername}' and cid='${remarkcid}' and term='${remarkterm}'`
        const _remarks = await query(q);
        setRemarks(_remarks);
    }
    getRemarks();
    if(remarks == null) return <SplashScreen/>

    return(
        <div className="feature-card"> 
        <div style={{marginRight:"100px"}}>
            <p> TA: {name} </p>
            <img style={{height:"400px", width:"400px"}} src={checklist}></img> 
        </div>
        <div>
            <p>Student Remarks</p>
            <table className="all-table">
                <tbody>
                    {remarks.map((tupples,i) => {
                        return (
                            <tr key={i} className= "all-tr"> <td> {tupples.tcomment} </td></tr>
                        );
                    })}
                </tbody>
            </table>
            <br />
            <Link to="/taAdmin/info">
                <button style={{float:"right"}} className="button-style">Back</button>
            </Link>
        </div>
    </div>
    );
};


const History = () => {

    const[courses, setCourses] = useState(null);
    const navigate = useNavigate();

    const getCourses = async () => {
        if(courses!=null) return;
        const _courses = await query(`select tarating.cid, tarating.term,  AVG(score), taperformance.tcomment from courseusers, taperformance, tarating 
        where courseusers.cid = taperformance.cid and courseusers.term = taperformance.term and courseusers.cid = tarating.cid and courseusers.term = tarating.term and tarating.tusername = courseusers.username and tarating.tusername = taperformance.tusername and tarating.tusername='${taUsername}' group by(tarating.cid,tarating.term,tarating.tusername,taperformance.tcomment)`
        );
        setCourses(_courses);
    };
    getCourses();
    
    if(courses == null) return <SplashScreen/>

    const setRemarks = (props) => {
        console.log(props)
        remarkcid = props.cid;
        remarkterm = props.term;
        return navigate("../remarks", {replace:true});
    }

    return (
        <div className = "feature-card">
            <div style={{width:'80vw'}}>
            <p style={{marginBottom:'20px', position:'center'}}> TA: {name} </p>
            <table className="ta-history-table">
            <thead style={{position:'sticky'}}>
                <tr className="ta-history-row">
                <th scope="col">Previous Courses</th>
                <th scope="col">Term</th>
                <th scope="col">Avg Student Rating </th>
                <th scope="col">Ta Performance</th>
                </tr>
            </thead>
                <tbody>
                    {courses.map((tupples,i) => { 
                        return(<tr key={i} className="ta-history-row">
                        <td>{tupples.cid}</td>
                        <td>{tupples.term}</td>
                        <td>{tupples.avg}  <button className="view-student-button" 
                        onClick={() => setRemarks(tupples)}> view </button> </td>
                        <td>{tupples.tcomment}</td>
                        </tr>);})}
                </tbody>
            </table>
            <br/>
            <Link to="/taAdmin/info">
                <button style={{float:'right'}} className="button-style">Back</button>
            </Link>
            
            </div>
        </div>
    );
};


const WishList = () => {

    const [wishlist, setWishlist] = useState(null);

    const getWishlist = async () => {
        if(wishlist !=null ) return;
        const _wishlist = await query(`select cid, term from tawishlist where username='${taUsername}'`);
        setWishlist(_wishlist)
    };
    getWishlist();
    if(wishlist == null) return <SplashScreen/>

    return (
        <div className="feature-card"> 
            <div style={{marginRight:"100px"}}>
                <p> TA: {name} </p>
                <img style={{height:"200px", width:"400px"}} src={wish}></img> 
            </div>
            <div>
                <p>Courses of Professors WishList</p>
                <table className="all-table">
                    <thead>
                        <tr> <th> Course </th> <th> Term </th></tr>
                    </thead>
                    <tbody>
                    {wishlist.map((tupples,i) => { 
                        return(<tr key={i} className="all-tr">
                        <td>{tupples.cid}</td>
                        <td>{tupples.term}</td>
                        </tr>);})}
                </tbody>
                </table>
                <br />
                <Link to="/taAdmin/info">
                    <button style={{float:"right"}} className="button-style">Back</button>
                </Link>
            </div>
        </div>
    );
};


const CurrentTa = () => {

    const[courses, setCourses] = useState(null);

    const getCourses = async () => {
        const _courses = await query(`select cid, term from courseusers where username='${taUsername}' and usertype='TA'`);
        setCourses(_courses);
    }

    getCourses();
    if(courses == null) return <SplashScreen/>;

    return (
        <div className="feature-card"> 
            <div style={{marginRight:"100px"}}>
                <p> TA: {name} </p>
                <img style={{height:"400px", width:"400px"}} src={checklist}></img> 
            </div>
            <div>
                <p> Current Courses</p>
                <table className="all-table">
                    <tbody>
                        {courses.map((tupples,i) => {
                            return (
                                <tr key={i} className="all-tr"> <td>{tupples.cid} {tupples.term} </td> </tr>
                            );
                        })}
                    </tbody>
                </table>
                <br />
                <Link to="/taAdmin/info">
                    <button style={{float:"right"}} className="button-style">Back</button>
                </Link>
            </div>
        </div>
    );
};



const SelectTa = () => {
    const [allta, setAllta] = useState(null);
    const [optionValue,optionChange] = useState(null);
    const navigate = useNavigate();

    const getAllTa = async () => {
        if(allta != null) return;
        const _allta = await query(
            "select firstname, lastname, ta.username from users, ta where users.username=ta.username order by firstname"
        );
        setAllta(_allta);
    };

    getAllTa();

    if (allta == null) return <SplashScreen />;

    const infoTaOption = (event) =>{
        const { name, value } = event.target;
        optionChange(value)
    }

    const optionInfo = () => {
        return navigate(`..${optionValue}`)
    }

    return (
        <div className="feature-card">
            <img src={magnify}></img>
            <div>
                <p> Select a TA</p>
                <Select
                    className="select-ta"
                    classNamePrefix="ta"
                    isClearable={true}
                    isSearchable={true}
                    name="TA"
                    onChange={(e) => {
                        name = e.value.firstname + " " + e.value.lastname;
                        taUsername = e.value.username;
                    }} 
                    options={allta.map((ta) => {
                        return {
                            label: `${ta.firstname} ${ta.lastname}`,
                            value: {
                                firstname: ta.firstname,
                                lastname: ta.lastname,
                                username: ta.username,
                            },
                        };
                    })}
                    />
                <br />
                <form> 
                    <p>Select Option</p>
                    <div>
                        <label className="infota-option-label" for="infoTaOption1">
                        <input type="radio" id="infoTaOption1"
                        name="infoTaOption" value="/wishlist" 
                        onChange={(event) => infoTaOption(event)} 
                       />
                        WishList</label>

                        <label className="infota-option-label" for="infoTaOption2">
                        <input type="radio" id="infoTaOption2"
                        name="infoTaOption" value="/current"
                        onChange={(event) => infoTaOption(event)} 
                       />
                        Current</label>

                        <label className="infota-option-label" for="infoTaOption3">
                            <input type="radio" id="infoTaOption3"
                            name="infoTaOption" value="/history"
                            onChange={(event) => infoTaOption(event)} 
                            />
                        History</label>
                    </div>
                </form>
                <br />
                <button 
                style={{float:'right'}} 
                className="button-style"
                onClick={optionInfo}>Go</button>
                 <Link to="/taAdmin/options">
                                <button style={{float:"right" }} className="button-style">Back</button>
                        </Link>
            </div>
        </div>
    );
};




const InfoTa = () => {
    return (
        <Routes>
            <Route path="" element={<SelectTa />}/>
            <Route path="/current" element={<CurrentTa />}/>
            <Route path="/wishlist" element={<WishList />}/>
            <Route path="/history" element={<History />}/>
            <Route path="/remarks" element={<StudentRemarks />}/>
        </Routes>
    );
};

export default InfoTa;