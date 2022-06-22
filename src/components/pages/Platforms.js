import React  from 'react';
import c from "../images/Platforms/coderz.png";
import f from "../images/Platforms/flash.jpg";
import t from "../images/Platforms/tynker.jpg";
import ti from "../images/Platforms/tinkercad.jpg";
import s from "../images/Platforms/scratch.png";
import r from "../images/Platforms/roblox.png";
import a from "../images/Platforms/arduino.png";
import m from "../images/Platforms/minecraft.jpg";
import sl from "../images/Platforms/slooh.png";
import v from "../images/Platforms/vex.png";
import l from "../images/Platforms/lego.jpg";
import cr from "../images/Platforms/cretile.png";
import Carousel from "react-elastic-carousel";
import Item from "./Item";
import "./stylesC.css";

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 },
];

function Platform() {
  return (
    <>
      <h1 style={{ textAlign: "center" }}>Our Platfroms</h1>
      <div className="App">
        <Carousel breakPoints={breakPoints}>
          <Item><img src = {c} /></Item>
          <Item><img src = {f} /></Item>
          <Item><img src = {t} /></Item>
          <Item><img src = {ti} /></Item>
          <Item><img src = {s} /></Item>
          <Item><img src = {r} /></Item>
          <Item><img src = {a} /></Item>
          <Item><img src = {m} /></Item>
          <Item><img src = {sl} /></Item>
          <Item><img src = {v} /></Item>
          <Item><img src = {l} /></Item>
          <Item><img src = {cr} /></Item>
        </Carousel>
      </div>
    </>
  );
}

export default Platform;
