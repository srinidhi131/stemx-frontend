import React , {Component} from 'react';
import coding from "../images/coding.gif"
import Tabs from "./Tabs";

class Coding extends Component{
    render(){
      return(
        <div>
       <h1> Coding and Sequencing </h1>
       <img className = "page-img" src = {coding} />
       <Tabs>
        <div classname = "tab-data" label="About Course">
        Coding is an essential skill that will make the young minds future ready. Fundamentals of coding foster key skills in kids.
        </div>
        <div classname = "tab-data" label="Learning Outcome">
        ♦ Scratch and Tynker developed by MIT, is the gold standard for learning to code.<br/>
        ♦ Streamlined visual programming blocks, you’ll learn all about sprites, creating custom costumes, and animating with code.<br/>
        ♦ As you grow your skill set, you’ll explore how to define the execution order of your code using coordinated events, conditional checks, and control loops.<br/>
        ♦ Used in 120+ countries, supported by SCRATCH foundation, LEGOfoundation, Google & Microsoft.<br/>
        
        </div>
        <div classname = "tab-data" label="Trial Videos">
          
        </div>
      </Tabs>
       </div>
      )
    }
  }
  
  export default Coding;