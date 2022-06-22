import React, { Component } from 'react';
import Card from "./Cards";
import ind from "../images/ind.jpeg";
import whi from "../images/whi.jpg";
import wro from "../images/wro.jpg";
import fll from "../images/fll.jpg";
import osp from "../images/osp.png";
import ss from "../images/schoolStem.jpeg";

class Contact extends Component{
  render(){
    return(
        <div>
      <div class = "container-fluid d-flex justify-content-center">
        <div className='row'>
          <div className='col-md-4'>
            <Card imgsrc={ind} title="STEMx Studio Indiranagar" data="See more" link="/Indiranagar"/>
          </div>
          <div className='col-md-4'>
            <Card imgsrc={whi} title="STEMx Studio Whitefield" data="See more" link="/Whitefield"/>
          </div>
          <div className='col-md-4'>
            <Card imgsrc={fll} title="FLL - Robotics Competition" data="See more" link="/fll"/>
          </div>
        </div>
      </div>
      <div class = "container-fluid d-flex justify-content-center">
      <div className='row'>
        <div className='col-md-4'>
        <Card imgsrc={wro} title="WRO - Robotics Competition" data="See more" link="/wro"/>
        </div>
        <div className='col-md-4'>
          <Card imgsrc={osp} title="Online STEM Programs" data="See more" link="/osp"/>
        </div>
        <div className='col-md-4'>
          <Card imgsrc={ss} title="STEM in Schools" data="See more" link="/Stem-in-Schools"/>
        </div>
      </div>
    </div>
    </div>
    )
  }
}
export default Contact;