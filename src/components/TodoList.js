import React from "react";
import TodoItem from "./TodoItem.js";

export default function TodoList() {
  return (
    <div className="todo-list">
      <h2>Todo List</h2>
      <TodoItem />
      <TodoItem />
      <TodoItem />
    </div>
  );
}
