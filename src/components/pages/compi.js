import React, { Component } from 'react';
import CardC from "./compiCards"
import fll from "../images/fll_chal.jpg";
import wro from "../images/wro.png";
import code from "../images/coderz.png";
import './compi.css';

class Compi extends Component{
  render(){
    return(
        <div className='compi'>
        <h1>Participate in Global Competitions</h1>
      <div class = "container-fluid d-flex justify-content-center">
        <div className='row'>
          <div className='col-md-4'>
            <CardC imgsrc={fll} link="/fll-about"/>
          </div>
          <div className='col-md-4'>
            <CardC imgsrc={wro} link="/wro-about"/>
          </div>
          <div className='col-md-4'>
            <CardC imgsrc={code} link="/coderz-about"/>
          </div>
        </div>
      </div>
      </div>
    )
  }
}
export default Compi;