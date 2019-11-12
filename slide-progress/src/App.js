import React from 'react';
import logo from './logo.svg';
import './App.css';
import SlideProgress from './SlideProgress'

function App() {
  return (
    <div className="App">
      <SlideProgress value={.5} onChange={(p) => {console.log('p的值为:',p)}}/>
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
