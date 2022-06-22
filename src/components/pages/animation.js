import React , {Component} from 'react';
import e from "../images/en.gif"
import Tabs from "./Tabs";

class Animations extends Component{
    render(){
      return(
        <div>
       <h1> Entrepreneurship </h1>
       <img className = "page-img" src = {e} />
       <Tabs>
        <div classname = "tab-data" label="About Course">
        Finally, An Easy Way For Kids To Learn About Entrepreneurship And Financial Literacy While Having FUN!
        <br/>An online + offline “ Entrepreneurship  ” program built upon real-world concepts that schools don’t teach!
        </div>
        <div classname = "tab-data" label="Learning Outcome">
        ♦ Understand the concepts of entrepreneurship.<br/>
        ♦ Brainstorm business ideas.<br/>
        ♦ Create a simple business plan.<br/>
        ♦ Create a budget for your business.<br/>  
        ♦ Devise and implement a simple marketing plan.<br/>
        ♦ Launch your own small business.<br/>
        ♦ Kid Entrepreneurship in easy and fun ways.<br/>  
        </div>
        <div classname = "tab-data" label="Trial Videos">
          
        </div>
      </Tabs>
       </div>
      )
    }
  }
  
  export default Animations;