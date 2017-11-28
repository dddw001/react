import React from 'react';
import {createStore} from 'redux';
export const Counter=({value,onIncrement,onDecrement})=>(
  <div>
    <h1>{value}</h1>
    <button onClick={onIncrement}>+</button>
    <button onClick={onDecrement}>-</button>
  </div>
);

const  reducer =(state=0,action)=>{
  switch(action.type){
    case 'INCREMENT':return state+1;
    case 'DECREMENT':return state-1;
    default:return state;
  }
};

export const store=createStore(reducer);

export default Counter;