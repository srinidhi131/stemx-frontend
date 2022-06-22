import React , {Component} from 'react';
import ImageG from "./image_gallery"
import robot from "../images/robot.jpg"
import drone from "../images/frone.jpg"
import iot from "../images/iot.jpg"
import pro from "../images/prototype.jpg"
class InSchool extends Component{
    render(){
      return(
        <div>
          <h1 className="kit-heading">In School STEM Program</h1>
        <div class = "container-fluid d-flex justify-content-center">
          <div className='row'>
            <div className='col-md-3'>
              <ImageG text="LEGO Robotics" src={robot} link="/lego-robotics"/>
            </div>
            <div className='col-md-3'>
              <ImageG text="Drone Tech" src={drone} link="/drone"/>
            </div>
            <div className='col-md-3'>
              <ImageG text="Electronics and IOT" src={iot} link="/electronic-iot"/>
            </div>
            <div className='col-md-3'>
              <ImageG text="3D Printing and Prototyping" src={pro} link="/prototype"/>
            </div>
          </div>
        </div>
        </div>
      )
    }
  }
  
  export default InSchool;