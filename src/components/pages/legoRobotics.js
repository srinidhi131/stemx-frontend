import React , {Component} from 'react';
import robot from "../images/robot.jpg"
import Tabs from "./Tabs";

class LegoRobotics extends Component{
    render(){
      return(
        <div>
       <h1> Lego Robotics </h1>
       <img className = "page-img" src = {robot} />
       <Tabs>
        <div classname = "tab-data" label="About Course">
        In LEGO Robotics course kids Build Robots using LEGO Elements, motors, sensors, Then test the Robot with Coding to make the Robot go live in front of them.
        </div>
        <div classname = "tab-data" label="Learning Outcome">
        ♦ Create and program automated Robots that can identify and ship the correct package based on color.<br/>
        ♦ Practice teamwork techniques by working through engaging challenges.<br/>
        ♦ Use the complete design process to solve a real-world problem linked to prostheses.<br/>
        ♦ Kids get a chance to understand tech concepts like: distance measurement, angles, Velocity and speed.<br/>
        ♦ Use effective teamwork to build and present a strong competition-ready Driving Base.<br/>    
        </div>
        <div classname = "tab-data" label="Trial Videos">
          
        </div>
      </Tabs>
       </div>
      )
    }
  }
  
  export default LegoRobotics;