import Select from "react-select";
import { colourOptions } from "../asset/test-data.ts";
import { Routes, Route, Link } from "react-router-dom";
import Success from "./success";
import magnify from "../asset/feature-stickers/Magnifying Glass.png";
import checklist from "../asset/feature-stickers/Checklist.png";
import wish from "../asset/feature-stickers/wish.png";

const name = "Jane Doe"

const WishList = () => {
    return (
        <div className="feature-card"> 
            <div style={{marginRight:"100px"}}>
                <p> TA: {name} </p>
                <img style={{height:"200px", width:"400px"}} src={wish}></img> 
            </div>
            <div>
                <p>Courses of Professors WishList</p>
                <table>
                    <tr> sup what is your name </tr> 
                    <tr> sup my name is  </tr>
                    <tr> sup </tr>
                    <tr> sup </tr>
                    <tr> sup </tr>
                    <tr> sup </tr>
                    <tr> sup </tr>
                    <tr> sup </tr>
                    <tr> how arr you </tr>
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
    return (
        <div className="feature-card"> 
            <div style={{marginRight:"100px"}}>
                <p> TA: {name} </p>
                <img style={{height:"400px", width:"400px"}} src={checklist}></img> 
            </div>
            <div>
                <p> Current Courses</p>
                <table>
                    <tr> sup what is your name </tr> 
                    <tr> sup my name is  </tr>
                    <tr> sup </tr>
                    <tr> sup </tr>
                    <tr> sup </tr>
                    <tr> sup </tr>
                    <tr> sup </tr>
                    <tr> sup </tr>
                    <tr> how arr you </tr>
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
    return (
        <div className="feature-card">
            <img src={magnify}></img>
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
                    />
                <br />
                <form> 
                    <p>Select Option</p>
                    <div >
                        <label className="infota-option-label" for="infoTaOption1">
                        <input type="radio" id="infoTaOption1"
                        name="infoTaOption" value="wishlist"/>
                        WishList</label>

                        <label className="infota-option-label" for="infoTaOption2">
                        <input type="radio" id="infoTaOption2"
                        name="infoTaOption" value="current"/>
                        Current</label>

                        <label className="infota-option-label" for="infoTaOption3">
                            <input type="radio" id="infoTaOption3"
                            name="infoTaOption" value="history"/>
                        History</label>
                    </div>
                </form>
                <br />
                <button style={{float:'right'}} className="button-style">Go</button>
            </div>
        </div>
    );
};


const InfoTa = () => {
    return (
        <Routes>
            <Route path="/taAdmin/info" element={<SelectTa />}/>
            <Route path="/taAdmin/info/current" element={<CurrentTa />}/>
            <Route path="/taAdmin/info/wishlist" element={<WishList />}/>
        </Routes>
    );
};

export default InfoTa;