import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import reducer from './reducer/index';

export const getClientStore = () => {
  // store的默认值，把数据JSON.Stringfy放在了script中
  const defaultStore = window.__context__ || {};
  return createStore(
    reducer,
    defaultStore.state,
    applyMiddleware(thunk));
}
export const getServerStore = () => {
  // 每个用户的请求过来，都会创建一个新的它自己的store
  return createStore(reducer, applyMiddleware(thunk));
}