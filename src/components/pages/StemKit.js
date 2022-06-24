import React, { Component } from 'react';
import "./stemKit.css"
import junior from "../images/junior.gif";
import senior from "../images/senior.gif";

class StemKit extends Component{
  render(){
    return(
      <div>
        <section className='wrapper'>
          <div className='main'>
            <img className="kit-image" src = {junior} />
            <div className='text'>
              <h1 className='kit-title'> Junior Kits </h1>
              <h5 className='kit-text'> For ages: 6 to 10</h5>
              <a href="/junior-kits"><button className="kit-button" type="button">More Details ></button></a>
            </div>
          </div>
        </section>
        <section className='wrapper'>
          <div className='main'>
            <img className="kit-image" src = {senior} />
            <div className='text'>
              <h1 className='kit-title'> Senior Kits </h1>
              <h5 className='kit-text'> For ages: 11 to 16</h5>
              <a href="/senior-kits"><button className="kit-button" type="button">More Details ></button></a>
            </div>
          </div>
        </section>
      </div>
    )
  }
}
export default StemKit;
