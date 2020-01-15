import React, { Component } from 'react'

class Drag1 extends Component {
  handleMove = () => {
    let left = e.clientX - e.starx;
    
  }
  handleDown = (e) => {
    this.starx = e.clientX;
    this.stary = e.clientY;
    document.body.addEventListener('mousemove', this.handleMove);
  }
  render() {
    return (
      <div>
        h2
      </div>
    )
  }
}
export default Drag1;