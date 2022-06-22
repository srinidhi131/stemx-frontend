import React from "react";
import './mode.css';
import { GiTeacher } from 'react-icons/gi';
import { BsHouseFill } from 'react-icons/bs';
import { HiOfficeBuilding } from 'react-icons/hi';
const Mode = () => {
  return (
    <div className="mode">
    <h1>MODE OF LEARNING</h1>
    <h5>Multiple modes of training designed to maximize your immersive learning experience.</h5>
    <div class="container1">
    <div class="row">
        <div class="col-md" id="columns">
        <GiTeacher color="orangered" fontSize="4.5rem" /><br/>
        <span>
            Teacher Led Online
        </span>
        <div className="text-cent">
        <p>Live Trainer program offered to the students globally.<br/>
        i) Collaborative learning <br/>
        ii) Group of 2 to 5 students
        </p>
        </div>
        </div>
        <div class="col-md" id="columns">
        <BsHouseFill color="orangered" fontSize="4.5rem" />
        <span>
            In House
        </span>
        <p>Our In-house programs are offered at our makerspace labs in our locations worldwide.
        </p>
        </div>
        <div class="col-md" id="columns">
        <HiOfficeBuilding color="orangered" fontSize="4.5rem" />
        <span>
            Mentor Led Externship
        </span>
        <p>Enhance your learning experience by working on near industry projects and use cases. Intern with the best industry professionals from Silicon Valley.
        </p>
        </div>
    </div>
    </div>
    </div>
  );
};

export default Mode;