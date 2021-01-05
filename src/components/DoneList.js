import React from "react";
import TodoItem from "./TodoItem.js";

export default function DoneList({ itemList }) {
  return (
    <div className="done-list">
      <h2>Done List</h2>
      {itemList.map((item, index) => (
        <TodoItem key={index} item={item} />
      ))}
    </div>
  );
}
