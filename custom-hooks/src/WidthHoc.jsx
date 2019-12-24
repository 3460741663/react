import React, { Component } from 'react';
// 每个组件都需要屏幕的宽度
// hoc
// withWidth(<Header />)
// this.props.widowWidth 1000
export default function withWidth(Com) {
  class WithWindowWidth extends Component {
    state = {
      width: window.innerWidth
    }
    componentDidMount() {
      window.addEventListener('resize', () => {
        this.setState({
          width: window.innerWidth
        })
      })
    }
    render() {
      return <Com  widowWidth ={this.state.width}/>
    }
  }
  return WithWindowWidth
}