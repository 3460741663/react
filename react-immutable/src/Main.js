import React, { Component } from 'react';
import BaseCom from './BaseCompoent'
class Main extends BaseCom {
  render() { 
    window.c ++;
    return ( <div>{this.props.value.get('c')}</div> );
  }
}
 
export default Main;