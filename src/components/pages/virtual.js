import React , {Component} from 'react';
import ImageG from "./image_gallery"
import robot from "../images/robot.jpg"
import app from "../images/app.jpg"
import iot from "../images/iot.jpg"
import pro from "../images/prototype.jpg"
import coding from "../images/coding.gif"
class Virtual extends Component{
    render(){
      return(
        <div>
          <h1 className="kit-heading">Virtual Live STEM Program</h1>
        <div class = "container-fluid d-flex justify-content-center">
          <div className='row'>
            <div className='col-md-3'>
              <ImageG text="Coding and Sequencing" src={coding} link="/coding"/>
            </div>
            <div className='col-md-3'>
              <ImageG text="Virtual LEGO Robotics" src={robot} link="/lego-robotics"/>
            </div>
            <div className='col-md-3'>
              <ImageG text="App Development" src={app} link="/app"/>
            </div>
            <div className='col-md-3'>
              <ImageG text="Virtual Electronics and IOT" src={iot} link="/electronic-iot"/>
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
  
  export default Virtual;