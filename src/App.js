import React from 'react';
import './App.css';
import './Styles/Style.css';
// import Header from './Components/CustomHeader/index';
import { Switch, Route, } from 'react-router-dom'
import Router from './Services/Router'
import {
  createBrowserHistory,
  createHashHistory,
  createMemoryHistory
} from 'history'

const history = createBrowserHistory();
function App() {
  return (
<Route history = {history}>
      <Switch>
        {Router.map((route, i) => (
          RouteWithSubRoutes(route)
          ))}
      </Switch>
</Route>
  );
}


function RouteWithSubRoutes(route) {
  return (
    <Route
      exact path={route.path}
      // render={props => (
      //   // pass the sub-routes down to keep nesting
      //   <route.component {...props} />
      // )}
      component = {route.component}
      
    />
  );
}

export default App;
