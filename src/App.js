import React, { useState } from "react";
import DoneList from "./components/DoneList.js";
import TodoList from "./components/TodoList.js";
import TodoForm from "./components/TodoForm.js";
import "./App.css";

function App() {
  const [todoItems, setTodoItems] = useState([]);

  const addTodo = (todo) => {
    setTodoItems(todoItems.concat(todo));
  };

  const updateTodo = (updatedTodo) => {
    const updatedTodoList = todoItems.map((item) => {
      return item.id === updatedTodo.id ? updatedTodo : item;
    });

    setTodoItems(updatedTodoList);
  };

  return (
    <div className="App">
      <h1>My App</h1>
      <TodoForm addTodo={addTodo} />
      <div className="list-container">
        <TodoList itemList={todoItems} updateTodo={updateTodo} />
        <DoneList itemList={todoItems} updateTodo={updateTodo} />
      </div>
    </div>
  );
}

export default App;
