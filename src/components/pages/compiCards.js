import React from 'react';
import "./CompiCard.css"

const CardC = props => {
  return(
    <div className='cover'>
    <div className='card-compi text-center shadow'>
      <div className='overflow'>
        <img src = {props.imgsrc} className='card-img-top'/>
      </div>
      <div className='card-body text-dark'>
        <a className = "a-link" href = {props.link} target={props.target}><button className='button-85'>Know More</button></a>
      </div>
    </div>
    </div>
  );
}
export default CardC;