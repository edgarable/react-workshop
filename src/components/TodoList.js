import React from "react";
import TodoItem from "./TodoItem.js";

export default function TodoList({ itemList, updateTodo }) {
  const pendingTodos = itemList.filter((item) => !item.completed);

  return (
    <div className="todo-list">
      <h2>Todo List</h2>
      {pendingTodos.map((item, index) => (
        <TodoItem key={index} item={item} updateTodo={updateTodo} />
      ))}
    </div>
  );
}
