import React from 'react';
import './App.css';
import './Styles/Style.css';
// import Header from './Components/CustomHeader/index';
import { Switch, Route, Router } from 'react-router-dom'
import Routes from './Services/Router'
import {createBrowserHistory} from "history"
import Home from './containers/Home'

const history = createBrowserHistory()

function App() {
  return (
<Router history = {history}>
      <Switch>
        <Route exact path = {'/'} component={Home}/>
        {Routes.map((route, i) => (
          RouteWithSubRoutes(route)
          ))}
      </Switch>
</Router>
  );
}


function RouteWithSubRoutes(route) {
  return (
    <Route
      exact 
       path={route.path}
      component = {route.component}
      
    >
    </Route>
  );
}


export default App;
