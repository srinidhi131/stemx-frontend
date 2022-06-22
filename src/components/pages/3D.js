import React , {Component} from 'react';
import p from "../images/prototype.jpg"
import Tabs from "./Tabs";

class Pro extends Component{
    render(){
      return(
        <div>
       <h1> 3D Printing and Prototyping </h1>
       <img className = "page-img" src = {p} />
       <Tabs>
        <div classname = "tab-data" label="About Course">
        Have you ever wanted to see something you design come to life, and become reality. Anything you see around you is designed in a CAD Software & then prototyped with a 3D Printer. Ex: Specs, Pen, Phone, Laptop, Drones etc
        </div>
        <div classname = "tab-data" label="Learning Outcome">
        ♦ Complete the entire 3D printing process.<br/>
        ♦ Use best practices for effective 3D print creation and troubleshooting print.<br/>
        ♦ Use polygon and curve modeling tools.<br/>
        ♦ Translate visual inspiration into successful 3D models.<br/>
        ♦ Unleash your creativity with your very own 3D Printer.<br/> 
        </div>
        <div classname = "tab-data" label="Trial Videos">
          
        </div>
      </Tabs>
       </div>
      )
    }
  }
  
  export default Pro;