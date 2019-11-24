import React, { Component } from 'react';
import { is } from "immutable";

// import immutable from 'immutable'
class Header extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    const thisProp = this.props || {};
    if(Object.keys(thisProp).length !== Object.keys(nextProps).length){
      return true
    }
    for (const key in nextProps) {
      if(!is(thisProp[key], nextProps[key])){
        return true 
      }
    }
    return false;
  }
  render() { 
    window.c ++;
    return (  
      <div>{this.props.value}</div>
    );
  }
}
 
export default Header;