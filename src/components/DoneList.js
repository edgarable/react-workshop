import React from "react";
import TodoItem from "./TodoItem.js";

export default function DoneList({ itemList, updateTodo }) {
  const completedTodos = itemList.filter((item) => item.completed);

  return (
    <div className="done-list">
      <h2>Done List</h2>
      {completedTodos.map((item, index) => (
        <TodoItem key={index} item={item} updateTodo={updateTodo} />
      ))}
    </div>
  );
}
