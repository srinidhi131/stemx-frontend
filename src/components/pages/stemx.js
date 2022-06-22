import React from "react";
import lego from "../images/lego.png"
import './stem.css'
const Stem = () => {
  return (
    <div className="stemx">
        <h1>Join the STEMx Revolution</h1>
    <div className="stem-wrapper">
    <section className = "stem">
        <div className="stem-main">
            <div className="stem-text">
              <p className="numbers">12,000+</p>  
              <h3>Happy Students</h3>
              <p className="numbers">50,000+</p>  
              <h3>Sessions Completed</h3>
              <p className="numbers">85+</p>  
              <h3>Mentors</h3>
              <p className="numbers">12+</p>  
              <h3>Schools</h3>
              <p className="numbers">7</p>  
              <h3>Countries</h3>
            </div>
            <div className="stem-image">
                <img src = {lego} />
            </div>
        </div>
    </section>
    </div>
    </div>
  );
};

export default Stem;