import React from "react";
import './about.css'
import online from "../resources/online.pdf";
import offline from "../resources/offline.pdf";

const About = () => {
  return (
    <div className="about-wrapper">
    <section className = "about">
        <div className="about-main">
            <div className="about-video">
            <iframe src="https://www.youtube.com/embed/UIlL9Nvwu38" />
            </div>
            <div className="about-text">
                <h1 className="about-head">About Us</h1>
                <h5 className="about-sub">STEMx Pailayout</h5>
                <p>STEMx Group were one of the first to introduce cutting edge technology in k-12 education and trainings since 2020. Two years back we introduced LEGO Education’s hands-on Robotics, Coding and early concepts of STEM.</p>
                <ul>
                    <li>Our offline STEMx Studio’s in Bangalore, India are spread across to Whitefield , Indiranagar and now in Pailayout.</li>
                    <li>Today our online STEM program has no limit to region, as we have students from India, Dubai, USA, Singapore, England, Nepal, Canada and Japan.</li>
                    <li>We partnered with 7 Schools in Bangalore, India to run in School STEM Program</li>
                </ul>
                <p>For more than 7+ Years Founders of STEMx have been working with parents, teachers, schools and governments to deliver playful learning experiences that bring STEM subjects like Robotics, Coding, 3D Printing, Electronics & Drones to life for the students and make learning fun and impactful.</p>
                <div className="btn-details">
                    <a href={online}><button className="details-button" type="button"> Online Regular program</button></a>
                    <a href={offline}><button className="details-button" type="button"> Weekend Offline Program</button></a>
                </div>
                <a href="/sign-up"><button className="about-button" type="button"> Book a Free Session</button></a>
            </div>
        </div>
    </section>
    </div>
  );
};

export default About;