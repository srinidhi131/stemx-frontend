import React from "react";
import Carousel from "./carousel";
import About from "./about";
import Mode from"./mode";
import Acc from"./acc";
import Cert from './certified';
import Compi from './compi.js';
import Platform from './Platforms';
import Stem from'./stemx';

const Home = () => {
  return (
    <div>
    <Carousel />
    <About />
    <Mode />
    <Acc />
    <Cert />
    <Compi />
    <Stem />
    <Platform />
    </div>
  );
};

export default Home;
