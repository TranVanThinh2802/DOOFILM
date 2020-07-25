import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter,Route, Switch, withRouter } from 'react-router-dom';
import Admin from './containers/Admin'
import Login from './containers/Login'




const AppContainer = withRouter(props => <App {...props} />);


ReactDOM.render(

  <BrowserRouter>
    <AppContainer/>
  </BrowserRouter>,
  
  
    
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
