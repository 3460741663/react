import React from 'react';
import logo from './logo.svg';
import './App.css';
import immutable from 'immutable'
// 可变
let a = [0, 1, 2];
a.push(3);
// 不可变
let immutableArr = immutable.fromJS([2, 3, 4]);
let b = immutableArr.push(5);
console.log(immutableArr.toJS());
console.log(b.toJS());

let obj = {
  a: 1,
  b: {
    c: 2
  },
  d: {
    e: 3
  }
};
// let obj1 = {
//   ...obj,
//   b: 2
// }
let obj2 = immutable.fromJS(obj);
console.log(obj2.getIn(['b', 'c'], 'default'));
let obj3 = obj2.setIn(['d', 'e'], 'ee');
// obj.b && obj.b.c

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
