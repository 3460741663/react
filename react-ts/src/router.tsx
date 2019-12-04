import * as React from 'react'
import { Route, HashRouter, Switch } from 'react-router-dom'
import { App } from './app'
import { About } from './components/about';
export const AppRouter: React.StatelessComponent<{}> =() => {
  return(
    <HashRouter>
      <div className="container-fluid">
        <Route component={App} />
        <Switch>
          <Route exact path="/" component={About} />
          <Route path="/about" component={About} />
        </Switch>
      </div>
    </HashRouter>
  )
}