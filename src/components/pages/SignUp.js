import React, { Component } from 'react';
import './Session.css';
import axios from 'axios';

class Session extends Component{

  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(e) { 
    e.preventDefault();
    var res = {
      name : e.target[0].value,
      phone : e.target[1].value,
      email : e.target[2].value
    }
    console.log(res);
    axios.post('http://localhost:4000/info/add', res)
            .then(alert("Our team will get back to you"))
            .then(window.location = "/");
  }
  render(){
    return(
      <div className='abcd'>
        <div class="box">
          <form onSubmit = {this.handleSubmit}>
            <p class="text-center">Get in touch</p>
            <div class="input-container">
              <input type="text"  required/>
              <label>Name</label>       
            </div>
            <div class="input-container">
              <input type="tel"  pattern="[6-9][0-9]{9}"  required/>
              <label>Phone Number</label>
            </div>
            <div class="input-container">
              <input type="email" required/>
              <label for="emailid" class="form-label">Email</label>
            </div>
            <button type="submit" value="Submit" class="form-button">Submit Details</button>
          </form>
        </div>
        </div>
    )
  }
}

export default Session;