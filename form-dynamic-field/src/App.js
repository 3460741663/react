import React from 'react';
// import logo from './logo.svg';
import './App.css';
class DynamicField extends React.Component {
  handleAdd = () => {
    this.props.onAdd();
  }
  handleSub = (i) => {
    this.props.onSub(i);
  }
  render() {
    const { rule } = this.props
    return (
      <>
        <label>规则</label>
        {
          rule.map((preRule, i) => {
            return (
              <div key={i}>
                <label for="name">姓名</label>
                {/* 受控组件 */}
                <input id="name" type="text" data-key="name" data-index={i} value={preRule.name} onChange={(event) => {
                  this.props.onFiledChange(event)
                }} />
                <label for="age">年龄</label>
                <input id="age" type="text" data-key="age" data-index={i} value={preRule.age} onChange={this.props.onFiledChange} />
                <button onClick={
                  () => {
                    this.handleSub(i);
                  }}>-</button>
              </div>
            )
          })
        }
        <br />
        <button onClick={this.handleAdd}>+</button>
      </>
    )
  }
}
class App extends React.Component {
  state = {
    date: '',
    rule: [
      { name: '', age: '' }
    ]
  }
  handleAdd = () => {
    let rule = this.state.rule.slice(0);
    rule.push({ name: '', age: '' });
    this.setState({
      rule
    })
  }
  handleSub = (i) => {
    let rule = this.state.rule.slice(0);
    rule.splice(i, 1)
    this.setState({
      rule
    })
  }
  handleChange =(event) =>{
    const key = event.target.dataset.key;
    const value = event.target.value;
    const index = event.target.dataset.index;
    let rule = this.state.rule.slice(0);
    rule[parseInt(index)][key] = value;
    this.setState({rule})
  }
  render(h) {
    const { rule } = this.state
    return (
      <div>
        <label for="date">日期</label>
        <input type="date" id="date"></input>
        <br />
        <DynamicField rule={rule} onAdd={this.handleAdd} onSub={this.handleSub} onFiledChange={this.handleChange} />
      </div>
    )
  }
}
export default App;
