import React , {Component} from 'react';
import space from "../images/space.gif"
import Tabs from "./Tabs";

class Space extends Component{
    render(){
      return(
        <div>
       <h1> Space Tech </h1>
       <img className = "page-img" src = {space} />
       <Tabs>
        <div classname = "tab-data" label="About Course">
        STEMx is proud to unveil its Space Explorer Program, which aims to support youth from around the world, by giving it direct access to a satellite and kids can control of robotic telescopes.
        </div>
        <div classname = "tab-data" label="Learning Outcome">
        ♦ Students will learn about Space, Satellites using fun simulation apps.<br/>
        ♦ Students learn how to create complex motion and shooting games in Space.<br/>
        ♦ Students will create apps that fetch data transmitted by a satellite.<br/>
        ♦ Create online simulations using Coding to explore celestial bodies such as Stars, moon, solar system, galaxy & milky way.<br/>  
        </div>
        <div classname = "tab-data" label="Trial Videos">
          
        </div>
      </Tabs>
       </div>
      )
    }
  }
  
  export default Space;