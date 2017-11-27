import React from 'react';
import AddTodo from './AddTodo.js';
import ListTodos from './ListTodos.js';
class TodoList extends React.Component{
  constructor(){
    super();
    this.state={
      todos:[
        "123",
        "456"
      ]
    };
  }

  addTodo(newAdd){
    if(newAdd!=="")
    {
      this.state.todos.push(newAdd);
    }
    this.setState({
      todos:this.state.todos
    })
  }

  deleteTodo(index){
   this.state.todos.splice(index,1);
   this.setState({
    todos:this.state.todos
  })
  }
  render(){
    return(
     <div className="mainContent">
       <AddTodo addTodo={this.addTodo.bind(this)}/>
       <ListTodos todos={this.state.todos} deleteTodo={this.deleteTodo.bind(this)}/>
     </div>
    )
  }
}

export default TodoList;