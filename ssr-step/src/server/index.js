import React from 'react';
import express from 'express';
import { renderToString 
} from 'react-dom/server';
import Header from '../components/Header';
import render from './render';
import { matchRoutes } from 'react-router-config'
import routes from '../routers'
import { getServerStore } from '../store/index'
/**
 * 构建在 虚拟 dom 之上的 服务端渲染
 * { name： ''， age: '' }
 * { tag: '', attribute: , children: [], class: '' }
 * 
 * MVVM / dom diff
 * react: react-native
 * vue:   weex
 */
const app = new express();
// publi 前端打包后访问的静态资源
app.use(express.static('public'))
app.get('*', (req, res) => {
  // render之前，保证redux中有数据，渲染出来的页面 就是带有数据的HTML
  // 1. 访问当前url命中的所有组件
  // 2. 拿到组件上面的loadData
  // 3. dispatch
  // 4. 渲染
  const matchRouters = matchRoutes(routes, req.path);
  const store = getServerStore();
  // 等待所有的请求完成, 保证redux中有数据
  let promises = [];
  matchRouters.forEach(mRouter => {
    if(mRouter.route.loadData){
      promises.push(mRouter.route.loadData(store))
    }
  })
  Promise.all(promises)
  // promise完成
  .then(resArray => {
    // console.log(store)
    const html = render(req, store);
    res.send(html)
  })
  .catch(err => {
    console.log('服务端出错了', err);
  })
  // matchRouters.forEach(mRouter => {
  //   console.log(mRouter.route.loadData + "___________________")
  // })

  
})
app.listen(3000, () => {
  console.log('server is running 3000');
})