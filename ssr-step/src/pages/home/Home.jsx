import React, { Component } from 'react';
import { getCommentList } from '../../store/action/homeAction'
import { connect } from 'react-redux'
class Home extends Component {
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