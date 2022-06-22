import React, { Component } from 'react';
import a from "../images/Certificates/1.jpg";
import b from "../images/Certificates/2.jpg";
import c from "../images/Certificates/3.jpg";
import d from "../images/Certificates/4.jpg";
import e from "../images/Certificates/5.jpg";
import f from "../images/Certificates/6.jpg";
import g from "../images/Certificates/7.jpg";
import h from "../images/Certificates/8.jpg";
import i from "../images/Certificates/9.jpg";
import j from "../images/Certificates/10.jpg";
import Carousel from "react-elastic-carousel";
import Item from "./Item";
import "./stylesC.css";

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 },
];

function Cert() {
  return (
    <>
      <h1 style={{ textAlign: "center" }}>Certified By STEMx</h1>
      <div className="App">
        <Carousel breakPoints={breakPoints}>
        <Item><img src = {a} /></Item>
          <Item><img src = {b} /></Item>
          <Item><img src = {c} /></Item>
          <Item><img src = {d} /></Item>
          <Item><img src = {e} /></Item>
          <Item><img src = {f} /></Item>
          <Item><img src = {g} /></Item>
          <Item><img src = {h} /></Item>
          <Item><img src = {i} /></Item>
          <Item><img src = {j} /></Item>
        </Carousel>
      </div>
    </>
  );
}

export default Cert;
