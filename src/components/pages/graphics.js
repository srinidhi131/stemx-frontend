import React , {Component} from 'react';
import gd from "../images/graphics.gif"
import Tabs from "./Tabs";

class Graphics extends Component{
    render(){
      return(
        <div>
       <h1> Graphics and Design </h1>
       <img className = "page-img" src = {gd} />
       <Tabs>
        <div classname = "tab-data" label="About Course">
        Create beautiful designs for your friends by using drag and drop features and layouts to design, share and print business cards, logos, presentations, videos, comic strips & graphics
        </div>
        <div classname = "tab-data" label="Learning Outcome">
        ♦ Create vector art.<br/>
        ♦ Develop scalable, responsive SVG graphics.<br/>
        ♦ Explore industry standard features of Adobe Illustrator.<br/>
        ♦ Create, modify, edit, save and customize images and make the image flow like a cartoon.
<br/>  
        </div>
        <div classname = "tab-data" label="Trial Videos">
          
        </div>
      </Tabs>
       </div>
      )
    }
  }
  
  export default Graphics;