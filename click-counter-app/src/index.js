import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Counter,{store} from './Counter.js';

import {createStore} from 'redux';
const render=()=>{
  ReactDOM.render(
    <Counter 
      value={store.getState()}
      onIncrement={()=>store.dispatch({type:'INCREMENT'})}
      onDecrement={()=>store.dispatch({type:'DECREMENT'})}/>,
      document.getElementById("root")
  );
};

render();
store.subscribe(render);
