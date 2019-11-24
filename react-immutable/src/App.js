import React from 'react';
import logo from './logo.svg';
import './App.css';
import immutable from 'immutable'
import Header from './Header'
import Main from './Main'
import Footer from './Footer'
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
window.c = 0;
// console.log(obj2.getIn(['b', 'c'], 'default'));
// let obj3 = obj2.setIn(['d', 'e'], 'ee');
// obj.b && obj.b.c

class App extends React.Component {
  state = {
    store: obj2
  }
  HandleSet = ( ) => {
    let store = this.state.store.setIn(['d', 'e'], '456');
    this.setState({
      store
    })
  }
  render() {
    const store = this.state.store
    return(
      <div>
        <button onClick={this.HandleSet}>set d</button>
        <Header value={store.get('a')}/>
        <Main value={store.get('b')} />
        <Footer value={store.get('d')} />
      </div>
    )
  }
}

export default App;
