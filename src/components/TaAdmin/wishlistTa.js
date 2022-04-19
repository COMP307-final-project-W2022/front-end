import Select from "react-select";
import { Routes, Route, Link, Navigate, useNavigate } from "react-router-dom";
import React, { useRef } from "react";
import book from "../../asset/feature-stickers/Brainstorming.png";
import characters from "../../asset/feature-stickers/Humans3Characters.png";
import { query } from "../../api";
import { useState } from "react";
import SplashScreen from "../splashScreen";
import Wishlist from "../taWishlist";

let professor = null;
let courseCode = null;
let term = null;
let wishlist = [];

const WishListView = () => {
    return (
        <div className="feature-card">
            <div style={{paddingRight:"100px"}}>
                <p> Professor: {professor} </p>
                <img style={{width:"300px", height:"300px", float:'centerr'}} src={characters}></img>
                <p> Course: {courseCode} </p>
                 <p> Term: {term}</p>
            </div>
            <div>
                <p> Ta WishList </p>
                <table className="all-table">
                    <tbody>
                        {wishlist.map((tupples,i) => {
                            return (                         
                                <tr key={i} className="all-tr"> <td> {tupples.firstname} {tupples.lastname} </td> </tr>
                            );
                        })}
                    </tbody>
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

    const [courses, setCourses] = useState(null);
    const [terms, setTerms] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    const getCoursesAndTerms = async () => {
        if(courses != null) return;
        const _courses = await query(
            "select distinct cid from courseinfo order by cid"
        );
        setCourses(_courses);

        if(terms != null) return;
        const _terms = await query(
            "select distinct term from courseinfo order by term");
        setTerms(_terms);
    };

    getCoursesAndTerms();

    if(courses == null || terms == null) return <SplashScreen />
    
    const viewWishlist = async () => {     
        setIsLoading(true);
        try { 
        const _professor = await query(
            `select firstname, lastname from users, professors where users.username=professors.username and professors.username in (select username from courseinfo where cid='${courseCode}' and term='${term}')`
        );
     
        if(_professor == null) return <SplashScreen />
        professor = `${_professor[0].firstname} ${_professor[0].lastname}`;
    
        const _wishlist = await query(
            `select firstname, lastname from users, ta where users.username=ta.username and ta.username in (select username from tawishlist where cid='${courseCode}' and term='${term}') order by firstname`
        );
        if(_wishlist == null) return  <SplashScreen />
        wishlist = _wishlist

        return navigate("../view", {replace: true});
        }
        catch {
            alert("Course not found!");
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
                        onClick={viewWishlist}> Go</button>
                         <Link to="/taAdmin/options">
                                <button style={{float:"right" }} className="button-style">Back</button>
                        </Link>
                </div>
            </div>
        </div>
    );
};


const TaWishlist = () => {
    return (
        <Routes>
            <Route path="/select" element={<CourseTermSelection />}/> 
            <Route path="/view" element={<WishListView />}/>
        </Routes>
    );
};

export default TaWishlist;