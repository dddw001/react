import React from 'react';

class ListTodos extends React.Component{
  handledelete(evt){
    //console.log(evt.target.getAttribute("data-key"));
    this.props.deleteTodo(evt.target.getAttribute("data-key"));
  }
  render(){
    return(
     <ul>
      {
        this.props.todos.map((item,i)=>{
          return(
            <li key={i} className="todos">
              <label>{item}</label>
              <button data-key={i} onClick={this.handledelete.bind(this)}>删除</button>
            </li>
          )
        })
      }
     </ul>
    )
  }
}

export default ListTodos;