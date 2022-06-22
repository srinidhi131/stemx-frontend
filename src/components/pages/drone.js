import React , {Component} from 'react';
import drone from "../images/frone.jpg"
import Tabs from "./Tabs";

class Drone extends Component{
    render(){
      return(
        <div>
       <h1> Drone Tech </h1>
       <img className = "page-img" src = {drone} />
       <Tabs>
        <div classname = "tab-data" label="About Course">
        Lets inspire kids in Aerospace tech, where kids get to learn physics and math practically, also code the drone to solve gamified challenges
        </div>
        <div classname = "tab-data" label="Learning Outcome">
        ♦ Drone command library, Sequencing<br/>
        ♦ Repetition, Events<br/>
        ♦ Conditional logic<br/>
        ♦ Problem solving and Debugging<br/>
        ♦ Physics come live<br/>    
        </div>
        <div classname = "tab-data" label="Trial Videos">
          
        </div>
      </Tabs>
       </div>
      )
    }
  }
  
  export default Drone;