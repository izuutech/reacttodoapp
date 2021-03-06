import React, { Component } from 'react';

import Todos from './Todos'

import AddTodo from './AddForm'

class App extends Component {
  
  state={
    todos: [
      {id: 1, content: "buy some software"},
      {id: 2, content: 'play fm2022'}
    ]
  }

  deleteTodo=(id)=>{
    console.log(id);
    let todos= this.state.todos.filter(todo=>{
      return todo.id !== id
    })
    this.setState({
      todos: todos
    })

  }
  addTodo=(newTodo)=>{
    newTodo.id=Math.random();
    let todos=[...this.state.todos, newTodo];
      this.setState({
        todos: todos
      })
  }


  render(){
  return (
    <div className="todo-app container">
    <h1 className="center blue-text">Todo's</h1>
      <Todos todos={this.state.todos} deleteTodo={this.deleteTodo} />
      <AddTodo addTodo={this.addTodo}/>
    </div>
  );
  }
}

export default App;
