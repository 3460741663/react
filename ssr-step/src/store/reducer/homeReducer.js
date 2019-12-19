const defaultState = {
  commentList: []
};
export default (state = defaultState, actions) => {
  switch(actions.type){
    case 'HOME_LIST' : return {... state, commentList:actions.commentList}
    default:return state
  }
}