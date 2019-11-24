import React, { Component } from 'react';
import BaseCom from './BaseCompoent'
class Footer extends BaseCom {
  render() { 
    window.c ++;
    return ( <div>{this.props.value.get('e')}</div> );
  }
}
 
export default Footer;