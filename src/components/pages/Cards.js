import React from 'react';
import "./card.css"
import 'bootstrap/dist/css/bootstrap.min.css';

const Card = props => {
  return(
    <div className='cover'>
    <div className='card text-center shadow'>
      <div className='overflow'>
        <img src = {props.imgsrc} className='card-img-top'/>
      </div>
      <div className='card-body text-dark'>
        <h4 className='card-title'>{props.title}</h4>
        <p className='card-text'> {props.text}</p>
        <p className='card-subtext'> {props.subtext}</p>
        <a className = "a-link" href = {props.link} target={props.target}>{props.data}</a>
      </div>
    </div>
    </div>
  );
}
export default Card;