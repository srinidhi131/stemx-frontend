import React , {Component} from 'react';
import Card from "./Cards"
import virtual from "../images/virtual.jpg";
import inSchool from "../images/inSchool.jpg";
import science from "../images/science.jpg";
import studio from "../images/studio.jpg";

class Programs extends Component{
  render(){
    return(
      <div>
      <div class = "container-fluid d-flex justify-content-center">
        <div className='row'>
          <div className='col-md-3'>
            <Card imgsrc={inSchool} title="In School STEM Program" data="Click to Explore!" link="/in-school"/>
          </div>
          <div className='col-md-3'>
            <Card imgsrc={virtual} title="Virtual Live STEM Program" data="Click to Explore!" link="/virtual-live"/>
          </div>
          <div className='col-md-3'>
            <Card imgsrc={studio} title="STEMx Advance Programs" data="Click to Explore!" link="/advance-program"/>
          </div>
          <div className='col-md-3'>
            <Card imgsrc={science} title="Science Tech Day Program" data="Click to Explore!" link="/science-day"/>
          </div>
        </div>
      </div>
      </div>
    )
  }
}

export default Programs;