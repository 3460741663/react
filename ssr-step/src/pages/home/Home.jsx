import React, { Component } from 'react';
import { getCommentList } from '../../store/action/homeAction'
import { connect } from 'react-redux'
class Home extends Component {
  // 服务端没有组件的全部生命周期
  componentDidMount() {
    this.props.getCommentList();
  }
  render() {
    const { commentList } = this.props
    return (
      <div>Home
        {
          commentList.map((comment, i) => {
            return (
              <li key={i}>{comment.content}</li>
            )
          })
        }
      </div>
    );
  }
}
/**
 * 服务端返回的页面需要带有数据
 * 数据需要： dispatch -> 触发
 * 客户端： mapDispatchToProps -> 交给组件
 * 服务端：把这个dispatch 放在 loadData 静态属性上面
 */
Home.loadData = function(store) {
  // loadData的起点
  // 这里是Promis则所有的loadData都是Promis， Promise.all
  // getCommentList是一个action
  return  store.dispatch(getCommentList())
}
const mapDispatchToProps = (dispatch) => {
  return {
    getCommentList: () => {
      dispatch(getCommentList())
    }
  }
}
const mapStateToProps = (state) => {
  return {
    commentList: state.home.commentList
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Home);