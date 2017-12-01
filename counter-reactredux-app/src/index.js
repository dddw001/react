import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import {Provider,connect} from 'react-redux';

//这是一个纯UI组件，有2个参数value,onIncreaseClick
class Counter extends React.Component{
  render(){
    const {value,onIncreaseClick}=this.props;
    return(
      <div>
        <span>{value}</span>
        <button onClick={onIncreaseClick}>Increase</button>
      </div>
    )
  }
}
//value到state的映射
function mapStateToProps(state){
  return{
    value:state.count
  }
}
//onIncreaseClick到dispatch的映射
function mapDispatchToProps(dispatch){
  return{
    onIncreaseClick:()=>dispatch(increaseAction)
  }
}
// action creator
const increaseAction={type:'increase'};
//使用connect方法生成容器组件
const App=connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter)

//定义这个组件的reducer
function counter(state={count:0},action){
  const count=state.count;
  switch(action.type){
    case 'increase':
      return {count:count+1}
    default:
      return state
  }
}

//最后生成store对象
const store=createStore(counter);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);