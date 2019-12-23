import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
// 纯函数
let map = new Map();
function add(a, b){
  let key = JSON.stringify(Array.from(arguments))
  if(map.get(key)) return map.get(key)
  let res = a + b;
  map.set(key, res);
  return res;
}
add(1, 2);
// 高阶函数： 函数是一等公民可以作为参数和返回值
// 其实就是增强函数的功能

function memorize(fn){
  let map1 = new Map();
  // 有缓存功能的函数
  return function(...args) {
    let key = JSON.stringify(Array.from(args))
    if(map1.get(key)) return map1.get(key);
    let res = fn(...args);
    map1.set(key, res);
    return res;
  }
}

