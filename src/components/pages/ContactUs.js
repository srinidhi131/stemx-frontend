import React, { Component } from 'react';
import Card from "./Cards"
import d from "../images/d.jpg";
import e from "../images/e.jpg";
import f from "../images/f.jpg";
class Contact extends Component{
  render(){
    return(
      <div class = "container-fluid d-flex justify-content-center">
        <div className='row'>
          <div className='col-md-4'>
            <Card imgsrc={d} title="Call/Whatsapp" text="+91-8904451122" subtext="+91-8050057788"/>
          </div>
          <div className='col-md-4'>
            <Card imgsrc={e} title="Address" text="101, j villa, 13th a cross, 2nd Main Rd, Pai Layout, Bengaluru, Karnataka 560016"/>
          </div>
          <div className='col-md-4'>
            <Card imgsrc={f} title="Locate on Google Map" data="STEMx Pailayout" link="https://goo.gl/maps/dBFc43SHNAR3Matv8" target="_blank"/>
          </div>
        </div>
      </div>
    )
  }
}
export default Contact;