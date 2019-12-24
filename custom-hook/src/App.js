import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import withWidth from "./WidthHoc";

// 高阶组件的写法
function Width({widnwWith}) {
  return (
    <h2>{ widnwWith }</h2>
  )
}
const withWindowWidth = withWidth(Width);
// hoc的写法
function useWidth() {
  const [ width, setWidth ] = useState(window.innerWidth);
  // const [ height, setHeigth ] = useState(window.innerHeight);
  const handleSize = () => {
    setWidth(window.innerWidth)
  }
  // 相当于componentdidmount / didupdate
  useEffect(() => {
    window.addEventListener('resize', handleSize)
    // 卸载时触发这个
    return () => {
      window.removeEventListener('resize', handleSize);
    }
  })
  return width;
}
function Width2() {
  const width = useWidth()
  return (
  <h3>{width}</h3>
  )
}

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
