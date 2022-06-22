import React , {Component} from 'react';
import ImageG from "./image_gallery"
import space from "../images/space.gif"
import game from "../images/game.jpg"
import gd from "../images/graphics.gif"
import e from "../images/en.gif"
class Advance extends Component{
    render(){
      return(
        <div>
          <h1 className="kit-heading">STEMx Advance Programs</h1>
        <div class = "container-fluid d-flex justify-content-center">
          <div className='row'>
            <div className='col-md-3'>
              <ImageG text="Space Tech" src={space} link="/space-tech"/>
            </div>
            <div className='col-md-3'>
              <ImageG text="Game Creation" src={game} link="/game-creation"/>
            </div>
            <div className='col-md-3'>
              <ImageG text="Graphics and Design" src={gd} link="/graphics-design"/>
            </div>
            <div className='col-md-3'>
              <ImageG text="Entrepreneurship" src={e} link="/entrepreneurship"/>
            </div>
          </div>
        </div>
        </div>
      )
    }
  }
  
  export default Advance;