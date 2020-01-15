// reducer -> store 
const createStore = (reducer) => {
  let currentState;
  currentState = reducer({}, {
    type: '@@redux/INIT' // 使它走默认值这条switch
  });
  let listeners = [];
  // 收集订阅
  function subscribe(cb) {
    listeners.push(cb);
  }
  function getState() {
    return currentState;
  }
  // action : plain object纯对象
  // dispatch -> action -> reducer -> store
  function dispatch(action) {
    // reducer
    currentState = reducer(currentState ,action);
    // 发布 通知
    for(let cb of listeners){
      cb()
    }
  }
  return {
    getState,
    dispatch,
    subscribe
  }
}
function combinReducer(reducers){
  let nextState = {}
  const finalReducerKeys = Object.keys(reducers);
  // 生成reducer
  return (state = {}, action) => {
    console.log('state->>>>>', state);
    for (let i = 0; i < finalReducerKeys.length; i ++){
      let key = finalReducerKeys[i];
      let reducer = reducers[key];
      const priviousState = state[key];
      nextState[key] = reducer(priviousState, action)
    }
    return nextState
  }
}
export {
  createStore,
  combinReducer
}