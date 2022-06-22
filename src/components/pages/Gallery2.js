import React from "react";
import "./test.scss"
const imgUrls = [];

class Gallery2 extends React.Component {
  constructor(props) {
    super(props);
    this.renderImageContent = this.renderImageContent.bind(this);
  }
  renderImageContent(src) {
    return (
      <div>
        <img src={src} key={src} loading="lazy" />
      </div>
    ) 
  }
  render() {
    return (
      <div className="gallery-container">
        <h1> {this.props.heading} </h1>
        {this.getData}
        <div className="gallery-grid">
          {this.props.data.map(this.renderImageContent)}
        </div>
      </div>
    )
  }
}


export default Gallery2;