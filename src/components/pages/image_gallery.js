import React from 'react';
import "./gallery.css"

const ImageG = props => {
    return(
        <div class="responsive">
        <a className="abc"href={props.link}>
        <div class="gallery">
            <img src={props.src}/>
          <div class="desc">{props.text}<br/>
          </div>
        </div>
        </a>
      </div>
    );
  }
  export default ImageG;