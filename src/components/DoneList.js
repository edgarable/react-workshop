import React from "react";
import TodoItem from "./TodoItem.js";

export default function DoneList() {
  return (
    <div className="done-list">
      <h2>Done List</h2>
      <TodoItem />
      <TodoItem />
      <TodoItem />
    </div>
  );
}
