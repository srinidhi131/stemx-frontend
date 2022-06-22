import React from 'react';
import Navbar from './components/navbar/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Gallery from './components/pages/Gallery';
import Indiranagar from './components/pages/indiranagar';
import Whitefield from './components/pages/Whitefield';
import WRO from './components/pages/WRO';
import ContactUs from './components/pages/ContactUs';
import Session from './components/pages/SignUp';
import Programs from './components/pages/Programs';
import StemKit from './components/pages/StemKit';
import JuniorKit from './components/pages/juniorKit';
import SeniorKit from './components/pages/seniorKit';
import InSchool from './components/pages/inSchool';
import Virtual from './components/pages/virtual';
import LegoRobotics from './components/pages/legoRobotics';
import Drone from './components/pages/drone'
import Eiot from './components/pages/electronicsIOT'
import Pro from './components/pages/3D'
import Coding from './components/pages/coding'
import AppD from './components/pages/appD'
import Advance from './components/pages/studio'
import Science from './components/pages/scienceDay'
import FLL from './components/pages/FLL'
import OSP from './components/pages/OSP'
import StemSchool from './components/pages/StemSchool'
import Space from './components/pages/space'
import Game from './components/pages/game'
import Graphics from './components/pages/graphics'
import Animations from './components/pages/animation'
import { FooterContainer } from './components/pages/footer'
import science from "../src/components/images/scienceDay.jpg";
import fll from "../src/components/images/fll-event.jpg";
import wro from "../src/components/images/wro-about.jpg";
import c from "../src/components/images/coderz-about.jpg";
function App() {
  return (
    <>

    
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' exact element={<Home/>} />
        <Route path='/gallery' element={<Gallery />} />
        <Route path='/contact-us' element={<ContactUs/>} />
        <Route path='/sign-up' element={<Session/>} />
        <Route path='/programs' element={<Programs/>} />
        <Route path='/stemKit' element={<StemKit/>} />
        <Route path='/junior-kits' element={<JuniorKit/>} />
        <Route path='/senior-kits' element={<SeniorKit/>} />
        <Route path='/in-school' element={<InSchool/>} />
        <Route path='/virtual-live' element={<Virtual/>} />
        <Route path='/advance-program' element={<Advance/>} />
        <Route path='/lego-robotics' element={<LegoRobotics/>} />
        <Route path='/space-tech' element={<Space/>} />
        <Route path='/game-creation' element={<Game/>} />
        <Route path='/graphics-design' element={<Graphics/>} />
        <Route path='/entrepreneurship' element={<Animations/>} />
        <Route path='/drone' element={<Drone/>} />
        <Route path='/electronic-iot' element={<Eiot/>} />
        <Route path='/prototype' element={<Pro/>} />
        <Route path='/coding' element={<Coding/>} />
        <Route path='/app' element={<AppD/>} />
        <Route path='/science-day' element={<Science img={science} heading="Science Tech day Program" text = "STEMx Mentors support schools with Science day / Tech day with STEM Projects based on Robotics, Humanoid Robotics, 3D Printing, Electronics, AI, Drone Technology. The environment of Science day shines with Technology all over the School" subtext="National Science Day is celebrated all over India with great enthusiasm on February 28 every year (starting from 2009) to commemorate the discovery of the Raman Effect by the Indian physicist, Dr. Chandrasekhara Venkata Raman (C V Raman) on the same day in the year 1928. He was awarded the Nobel Prize for Physics in 1930 for this discovery. National Science Day is celebrated as one of the prominent science festivals in India every year, during which students of various schools and colleges demonstrate motley of science projects as well as national and state science institutions exhibit their latest researches."/>} />
        <Route path='/indiranagar' element={ <Indiranagar />} />
        <Route path='/Whitefield' element={ <Whitefield />} />
        <Route path='/wro' element={ <WRO />} />
        <Route path='/fll' element={ <FLL />} />
        <Route path='/osp' element={ <OSP />} />
        <Route path='/Stem-in-Schools' element={ <StemSchool />} />
        <Route path='/fll-about' element={<Science img={fll} heading="First LEGO League" text = "FIRST LEGO League (FLL) is a program that supports children and youngsters in order to introduce them to science and technology in a sporty atmosphere." subtext="Each year in August, FIRST LEGO League Challenge teams are introduced to a scientific and real-world challenge for teams to focus and research on. The robotics part of the competition involves designing and programming Lego Education robots[4] to complete tasks. The students work out a solution to a problem related to the theme (changes every year) and then meet for regional, national and international tournaments to compete, share their knowledge, compare ideas, and display their robots."/>} />
        <Route path='/wro-about' element={<Science img={wro} heading="World Robotics Olympiad" text = "World Robot Olympiad is one of the largest Robotics competition in India for students between the age group of 8 to 19 years, held since 2006. It is a not-for-profit competition organized by India STEM Foundation." subtext="The combination of robotics and artificial intelligence can change the world and especially the environment of humans. The season challenges are connected to the ways that robots can help humans."/>} />
        <Route path='/wro-about' element={<Science img={wro} heading="World Robotics Olympiad" text = "World Robot Olympiad is one of the largest Robotics competition in India for students between the age group of 8 to 19 years, held since 2006. It is a not-for-profit competition organized by India STEM Foundation." subtext="The combination of robotics and artificial intelligence can change the world and especially the environment of humans. The season challenges are connected to the ways that robots can help humans."/>} />
        <Route path='/coderz-about' element={<Science img={c} heading="Coderz League Pro" text = "Welcome to CoderZ League! THE VIRTUAL ROBOTICS COMPETITION Join over 150,000 students from around the world who have already developed their STEM and coding skills in the CoderZ League experience. Anyone can participate! No expensive hardware is required. All you need is curiosity and excitement as you take this journey to power up your future."/>} />
      </Routes>
    </Router>
    <FooterContainer />
    </>
  );
}

export default App;