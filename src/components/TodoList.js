import React from "react";
import TodoItem from "./TodoItem.js";

export default function TodoList({ itemList }) {
  return (
    <div className="todo-list">
      <h2>Todo List</h2>
      {itemList.map((item, index) => (
        <TodoItem key={index} item={item} />
      ))}
    </div>
  );
}
