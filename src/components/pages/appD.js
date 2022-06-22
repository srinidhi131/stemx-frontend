import React , {Component} from 'react';
import app from "../images/app.jpg"
import Tabs from "./Tabs";

class AppD extends Component{
    render(){
      return(
        <div>
       <h1> App Development </h1>
       <img className = "page-img" src = {app} />
       <Tabs>
        <div classname = "tab-data" label="About Course">
        With Javascript, it’s about more than just learning the basics, Children expand their skill set endlessly and prepare for their dream career before they even graduate from high school.
        </div>
        <div classname = "tab-data" label="Learning Outcome">
        ♦ To get into Javascript kids should learn HTML / CSS. “Basically: HTML + CSS + JS = Website”<br/>
        ♦ Students will start by completing coding challenges to strengthen your understanding of new concepts.<br/>
        ♦ Next, you’ll explore game programming with Processing, learning about 2D movement and collisions, then you’ll code apps with user input and feedback at their core.<br/>
        ♦ As you progress, children realize they don’t need to wait until after high school to get a college education.<br/>
        ♦ Used by over 5 billion devices, Java is one of the most popular and versatile programming languages.<br/>
        </div>
        <div classname = "tab-data" label="Trial Videos">
          
        </div>
      </Tabs>
       </div>
      )
    }
  }
  
  export default AppD;