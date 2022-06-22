import React, { Component } from 'react';
import "./s.css"
class Science extends Component{
  render(){
    return(
      <div>
        <h1>{this.props.heading} </h1>
        <section className='wrap'>
          <div className='data-day'>
            <img className="img-day" src = {this.props.img} />
            <div className='text-day'>
              <p className='s-data'>{this.props.text}</p>
              <p className='s-data'>{this.props.subtext} </p>
            </div>
          </div>
        </section>
      </div>
    )
  }
}
export default Science;