import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
let isLogin = true;
class PrivateRoute extends Component {
  render() {
    const props = this.props;
    return (
      <div>
        {
          isLogin ? <Route {...props}></Route> : 'unAuth'
        }
      </div>
    )
  }
}
function Home () {
  return (
    <div><h1>Home</h1>
      <div>
        <Link to="/home" >首页</Link>
        <Link to="/home/guanzhu" >关注</Link>
        <Link to="/home/fe" >前端</Link>
        <Link to="/home/rd" >后端</Link>
        <Link to="/home/private">私密</Link>
      </div>
      <div className="main">
        <Route path="/home/guanzhu" component={Guanzhu}/>
        <Route path="/home/fe" component={Fe}/>
        <Route path="/home/rd" component={Rd}/>
        <PrivateRoute path="/home/private" component={PriCom} />
      </div>
    </div>
  )
}
function Guanzhu () {
  return (
    <div>Guanzhu</div>
  )
}
function Fe () {
  return (
    <div>Fe</div>
  )
}
function Rd () {
  return (
    <div>Rd</div>
  )
}
function Me () {
  return (
    <div>Me</div>
  )
}
function PriCom () {
  return (
    <div>PriCom</div>
  )
}
class Layout extends Component {
  render () {
    return (
      <div>
        <div className="main">
          <Route path="/home" component={Home}/>
          { isLogin && <Route path="/me" component={Me}/>}
        </div>
        <div className="footer">
          <Link to="/home">home</Link>
          <br/>
          { isLogin && <Link to="/me">me</Link>}
        </div>
      </div>
    )
  }
}
export default Layout;