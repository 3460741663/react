import React, { Component } from 'react';
import { is } from 'immutable'
class BaseCom extends Component {
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
}
 
export default BaseCom;