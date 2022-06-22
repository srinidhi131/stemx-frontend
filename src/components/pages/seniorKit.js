import React , {Component} from 'react';
import "./kit.css"
import e from "../images/senior.jpg";

class SeniorKit extends Component{
    render(){
        return(
            <div>
                <div className='info-start'>
                    <h1>STEMx Prime Kit</h1>
                    <img src = {e} className="kid"/>
                    <h2>For Ages: 11 to 16</h2>
                    <h5>STEMx Prime kit has a programmable block with drag-n-drop coding. Kit can be used without Coding also.</h5>
                </div>
                <div className = "main">
                    
                    <ul class="gradient-list"> 
                        <li class = "kit-data">ProLogic Arduino based coding block</li>
                        <li class = "kit-data">Two Motors with Speed and Direction Control</li>
                        <li class = "kit-data">Light</li>
                        <li class = "kit-data">Buzzer</li>
                        <li class = "kit-data">Light Sensor</li>
                        <li class = "kit-data">Two Obstacle Sensors</li>
                        <li class = "kit-data">Sound Sensors</li>
                        <li class = "kit-data">NOT Gate</li>
                        <li class = "kit-data">Copy</li>
                        <li class = "kit-data">Dimmer</li>
                        <li class = "kit-data">Switch</li>
                        <li class = "kit-data">Two Battery/Power Supply</li>
                        <li class = "kit-data">High Speed DC Motor</li>
                        <li class = "kit-data">Two Sensor Base</li>
                        <li class = "kit-data">Submersible Pump</li>
                        <li class = "kit-data">Connectivity Sensor</li>
                        <li class = "kit-data">Motion Sensor</li>
                        <li class = "kit-data">Limit Switch</li>
                        <li class = "kit-data">Servo Motor</li>
                        <li class = "kit-data">Pulse/Delay functionality</li>
                        <li class = "kit-data">Push Button : 2Pcs</li>
                        <li class = "kit-data">Transmitter</li>
                        <li class = "kit-data">Receiver</li>
                        <li class = "kit-data">U Turn - Right</li>
                        <li class = "kit-data">AND (Logic Gates)</li>
                        <li class = "kit-data">OR (Logic Gates)</li>
                        <li class = "kit-data">Toggle</li>
                        <li class = "kit-data">Pump / Motor</li>
                        <li class = "kit-data">One USB Rechargeble 9V Battery</li>
                        <li class = "kit-data">Two 9V Battery (non-rechargeble)</li>
                        <li class = "kit-data">Plastic Fan Blade</li>
                        <li class = "kit-data">Two Robotic Wheels</li>
                        <li class = "kit-data">Water Pipe</li>
                        <li class = "kit-data">Small Wheel</li>
                        <li class = "kit-data">Pulley</li>
                        <li class = "kit-data">USB Cable</li>
                    </ul>
                </div>
                <h5>This STEMx Essential training kit has 30 electronic building blocks of excellent quality.</h5>
                <h5>And we will be assisting you with training for the best utilization of this kit, to maximize your learning.</h5>
                <a href="/sign-up">
                    <button class="button-kit">Register to Buy</button>
                </a>

            </div>
    )
}
}

export default SeniorKit;