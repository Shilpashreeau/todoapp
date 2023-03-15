import './App.css';
import TodoList from './components/TodoList';
import { useState } from 'react';

function App() {
  const [todos,setTodos]=useState([]);
  const addTodo=(e)=>{
  // create a todo object
  const newTodo={
  text:e.target.value,
  id:Date.now(),
  completed:false

  
  }
  //add the  new todo to the array
  setTodos([...todos,newTodo])
  //reset the input
  e.target.value="";
  }
  return (
    <div className="App">
      <h1>Todo App</h1>
      <TodoList todos={todos} addTodo={addTodo}/>
    </div>
  );
}

export default App;
