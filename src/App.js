import React, {useEffect} from 'react';
import './App.css';
import './Styles/Style.css';
// import Header from './Components/CustomHeader/index';
import { Switch, Route, Router } from 'react-router-dom'
import Routes from './Services/Router'
import {createBrowserHistory} from "history"
import Home from './containers/Home'
import {Provider, useSelector} from 'react-redux'
import {store} from './store'

const history = createBrowserHistory()

function App() {

  
  return (
    <Provider store = {store}>
      <Router history = {history}>
            <Switch>
              <Route exact path = {'/'} component={Home}/>
              {Routes.map((route, i) => (
                RouteWithSubRoutes(route, i)
                ))}
            </Switch>
      </Router>
    </Provider>
  );
}


function RouteWithSubRoutes(route, key) {
  return (
    <Route
    key = {key}
    exact 
     path={route.path} 
    component = {(props) => <route.component {...props} key = {key}/>}
    
  >
  </Route>
  );
}


export default App;
