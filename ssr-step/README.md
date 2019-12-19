## 组件，既可以在客户端，也可以在服务端运行
同构 既可以在服务端跑，又要在客户端跑
首屏直出：客户端访问的第一屏，由服务端渲染，之后的页面变化都是SPA
SPA:
1. <div id = "app"></div>没有实质性的内容
2. js
3. js html
4. 真实页面

SSR:
1. <div id="app">内容</div>
2. js 事件绑定

FP: first-paint 有像素落点的时候
FCP: first-content-paint 有内容渲染的时候
FMP: first-meaning-paint 有意义的内容
TTI: time-to-interaction 可交互
DCL: dom content loaded 解析完成的时候
L: load 这个页面资源加载完毕

虚拟
服务端：生成 html
客户端：负责事件绑定

SPA：html 事件 在客户端

## JEE ejs
服务端渲染

## node
1. 服务端渲染
2. webpack babel 工具
3. 中间层（BFF）
   client  /buy  server
   问题：
   /num    1
   /login  2
   /buy    3
   解决：
   node: backend for front
   get('/nodeBuy', async () => {
     // 内网请求
     // 速度理论上限
     // rpc
     get('/num') login buy
   })
   // 非必要
   rpc：romote process call

- html同构
流程：
server 返回一个html,使用组件renderToString转字符串返回字符串
绑定事件 服务端返回html, 客户端绑定事件
public 中的东西静态资源映射
app.use(express.static('public'))

- 路由的同构
前端BrowserRouter... 后端使用StaticRouter来管理路由的跳转

## 上线
变成了node项目
server: /build/bundle.js  //localhost:3000  node来运行
```js
server: /build/bundle.js
// localhost:3000 node
// localhost:3000/login node 渲染 login 组件 html

expres.static('public')

public /public/index.js
// 作为node 服务返回的html 需要加载的资源
```
## 同构store
生成带有数据的html
用户请求： 生成带有数据的HTML
用户请求的这一页数据，都有后端生成在HTML里面，前端不需要再去发axios请求






redux使用流程
1. 在应用最外围使用Provider包裹住，然后传入一个store
```js
    <Provider store={getClientStore()}>
      <BrowserRouter>
        <div>{ renderRoutes(routes) }</div>
      </BrowserRouter>
    </Provider>
```
2. 所以需要先创建store
```js
export const getClientStore = () => {
  return createStore(reducer, applyMiddleware(thunk));
}
```
3. createStore之前需要有一个reducer, 且如果需要使用中间件则需要applyMiddleware(thunk))
```js
export default combineReducers({
  home: homeReducer
})
```
使用combineReducers把所有的reducer拼成一个reducer
真正的reducer长这样
```js
const defaultState = {
  commentList: []
};
export default (state = defaultState, actions) => {
  switch(actions.type){
    case 'HOME_LIST' : return {... state, commentList:actions.commentList}
    default:return state
  }
}
```
至此已经完整创建一个store
4. 
