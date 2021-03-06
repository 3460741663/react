import React from 'react';
import { Link } from 'react-router-dom'
/**
 * { tag: 'div' }
 * 浏览器：react-dom div
 * 服务端：字符串的 html，
 * 同构：
 */
class Header extends React.Component {
  componentWillMount() {
    console.log('component will');
  }
  buy () {
    console.log(1234566);
  }
  render() {
    return (
      <div>
        <Link to='/'>home</Link>
        <Link to='/login'>login</Link>
        {/* 
          localhost:3000 加载home  -> 服务端生成html
          点击login : login -> 这里是JS执行的结果
          刷新当前页面 : 3000/login: login -> server端渲染
        */}
        <button onClick={this.buy}>buy</button>
      </div>
    )
  }
}

export default Header;