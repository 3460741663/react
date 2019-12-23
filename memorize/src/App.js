import React, { useState, useMemo, useCallback} from 'react';
import logo from './logo.svg';
import './App.css';

// React.memo  //缓存组件的也可以说是shouldcomponentUpdate
// shouldComponentUpdate
function Count(props) {
  const [val, setVal] = useState(0);
  console.log('render', props);
  const calc = useMemo(() => {
    console.log('calc');
    return 10 + val;
  }, [val]);
  // useMemo 会对第二个参数/数组 前后俩次浅比较
  // 如果数组没有变化，会从缓存里面取值
  // useCallBack 缓存函数
  const cal1 = useCallback(() => {
    console.log('calc');
    return 10 + val;
  }, [val])
  return (
    <h3>
      {
        props.count
      }
      {
        calc
      }
      <button onClick={()=>{setVal(Math.random())}}>BUTTON</button>
    </h3>
  )
}
const Count1 = React.memo(Count, (thisProps, nextProps) => {
  return false;
});
// 第二个可选参数，定义你自己的比较规则，告诉它这俩个组件是否相等
// 默认情况把this.props 和 next.props 浅比较
// PureComponent
class Abc extends React.PureComponent{} // 浅比较 state/props
class Abc1 extends React.Component{} // shouldComponentUpdate默认为true

function App() {
  const [count, setCount] = useState(0); 
  return (
    <div className="App">
      <button onClick={() => {setCount(Math.random())}}>update count</button>
      <Count1 count={100} />
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
