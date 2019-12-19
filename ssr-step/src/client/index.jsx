import React from 'react'
import ReactDom from 'react-dom'
import {BrowserRouter} from 'react-router-dom'
import Header from '../components/Header'
import { renderRoutes } from 'react-router-config'
import routes from '../routers'
import { getClientStore } from '../store/index'
import { Provider } from 'react-redux'

const App = function() {
  return (
    <Provider store={getClientStore()}>
      <BrowserRouter>
      <div>{ renderRoutes(routes) }</div>
      </BrowserRouter>
    </Provider>
  )
}
{/* 复用已有的html, 负责事件绑定 */}
ReactDom.hydrate(<App />, document.getElementById('app'))