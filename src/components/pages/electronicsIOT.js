import React , {Component} from 'react';
import iot from "../images/iot.jpg"
import Tabs from "./Tabs";

class Eiot extends Component{
    render(){
      return(
        <div>
       <h1> Electronics and IOT </h1>
       <img className = "page-img" src = {iot} />
       <Tabs>
        <div classname = "tab-data" label="About Course">
        Students build electronic circuit modules to explore real work application based projects and code the circuit to make it live. Hear kids interact Software with Hardware
        </div>
        <div classname = "tab-data" label="Learning Outcome">
        ♦ Students to to work with controller, wires, LED’s, sensors, motors.<br/>
        ♦ Understand the working principle and real time use of sensors & motors.<br/>
        ♦ Code the circuit with C++ language for 10+ age group and block based coding for 6+ age group.<br/>
        ♦ Understand fundamental programming constructs like variables, conditional logic, looping, and functions. Work with user input to create fun and interactive Digital output.<br/>    
        </div>
        <div classname = "tab-data" label="Trial Videos">
          
        </div>
      </Tabs>
       </div>
      )
    }
  }
  
  export default Eiot;