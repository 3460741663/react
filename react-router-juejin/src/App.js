import React from 'react';
import reactDom from 'react-dom'
import { BrowserRouter, Route } from 'react-router-dom'
import { createStore } from 'redux'
// import logo from './logo.svg';
import Layout from './Layout'
import './App.css';

// 决定 Store 长啥样
// state 就是上一份 state
// action 就是提交过来的
function reducer (state, action) {
  if(!state) {
    return {
      count: 4
    }
  }
  const { count } = state; 
  if (action.type === 'ADD'){
    return {
      // 不可变数据，每次都是一个新的，不能在原来的对象上进行修改
      count: count + 1
    }
  }
  if (action.type === 'SUB'){
    return {
      count: count - 1
    }
  }
}
const store = createStore(reducer);
class Couter extends React.Component {
  add = () =>{
    store.dispatch({
      type: 'ADD'
    })
  }
  sub = () =>{
    store.dispatch({
      type: 'SUB'
    })
  }
  render () {
    console.log('store',store.getState())
    return (
      <div>
        count: {store.getState().count}
        <button onClick={this.add}>+</button>
        <button onClick={this.sub}>-</button>
      </div>
    )
  }
}
store.subscribe(() => {
  reactDom.render(<Couter/>, document.getElementById('root'));
})
reactDom.render(<Couter/>, document.getElementById('root'));
// 一切皆组件
// react-router 1. dom  2. native 3. 内存
class App extends React.Component {
  render () {
    return (
      <BrowserRouter>
        <Route path="/" component={Layout}/>
      </BrowserRouter>
    )
  }
}

export default App;
