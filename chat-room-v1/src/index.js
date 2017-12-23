import React from 'react';
import ReactDOM from 'react-dom';
import {createStore,applyMiddleware,compose} from 'redux';
import thunk from 'redux-thunk';
import {Provider} from 'react-redux';
import {BrowserRouter,Route,Redirct,Switch} from 'react-router-dom';


import Login from './container/login/login.js';
import Register from './container/register/register.js';
import AuthRoute from './component/authroute/authroute.js';
import reducers from './reducer.js';
import './config.js';
import './index.css';


const store=createStore(reducers,compose(
  applyMiddleware(thunk),
  window.devToolsExtension?window.devToolsExtension():f=>f
))

function Boss(){
  return <h2>boss页面</h2>
}

ReactDOM.render(
  (<Provider store={store}>
    <BrowserRouter>
      <div>
        <AuthRoute></AuthRoute>
        <Route path='/boss' component={Boss}/>
        <Route path='/login' component={Login}/>
        <Route path='/register' component={Register}/>
      </div>
    </BrowserRouter>
  </Provider>),
  document.getElementById('root')
);

