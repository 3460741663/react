import React, { Component, useState } from 'react';
import AutoBind from './autoBind';

function userFormInput(val) {
  const [value, setValue] = useState(val);
  const onChange = function(e) {
    setValue(e.target.value)
  }
  return {
    value,
    onChange
  }
}
function Input2() {
  const userName = userFormInput('default')
  return (
    <input type="text" {...userName} />
  )
}

class input1 extends Component {
  render() { 
    return ( 
      <AutoBind>
        <input type="text"/>
      </AutoBind>
     );
  }
}
 
export default input1;