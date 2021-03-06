import React, { Component } from 'react'
import './progress.css'
export default class SlideProgress extends Component {
  state = {
    value: 0
  }
  // 把prop映射成state 衍生
  static getDerivedStateFromProps(props) {
    return {
      value: props.value
    }
  }
  componentDidMount() {
    // string ref
    console.log(this.refs.ref1);
    // function ref
    // object ref
    console.log(this.objectRef);
    this.progressBtn.current.addEventListener('touchstart', (event) => {
      const touch = event.touches[0];
      this.startX = touch.clientX;
      this.btnLeft = parseInt(this.progressBtn.current.style.left || 0)
    })
    this.progressBtn.current.addEventListener('touchmove', (event) => {
      const touch = event.touches[0];
      this.endX = touch.clientX;
      const diffX = this.endX - this.startX;
      let move = diffX + this.btnLeft;
      if (move > 300) move = 300
      else if ( move < 0) move = 0; 
      this.progressBtn.current.style.left = move + 'px';
      let percent = (diffX + this.btnLeft) / this.objectRef.current.offsetWidth;
      this.props.onChange(percent);
      this.progressRef.current.width = percent + '%';
    })
    this.progressBtn.current.addEventListener('touchend', () => {

    })
  }
  objectRef = React.createRef();
  progressRef = React.createRef();
  progressBtn = React.createRef();
  render() {
    const { value } = this.state;
    console.log(value);
    return (
      <div className="progressBar" /*ref="ref1"*/ /*ref={(ref2)=>{ this.ref2= ref2 }}*/ ref={this.objectRef}>
        <div className="progress" style={{width:''}} ref={this.progressRef}></div>
        <div className="progressBtn" style={{left:''}} ref={this.progressBtn}></div>
      </div>
    )
  }
}