import React from 'react';
import ReactDOM from 'react-dom';
class AddTodo extends React.Component{
  handleAdd(){
    var inputDom=ReactDOM.findDOMNode(this.refs.addTodo);
    var newAdd=inputDom.value.trim();
    this.props.addTodo(newAdd);
  }
  render(){
    return(
      <div>
        <input type="text" ref="addTodo"/>
        <button onClick={this.handleAdd.bind(this)}>增加</button>
      </div>
    )
  }
}

export default AddTodo;