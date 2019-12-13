import React, { Component } from 'react';
class Header extends Component {
  state = {  }
  render() { 
    return ( 
      <div>
        hello server
        <button onClick={this.buy}>buy</button>
      </div>
     );
  }
}
 
export default Header;
<div>
  hello server
  <button onClick={this.buy}>buy</button>
</div>