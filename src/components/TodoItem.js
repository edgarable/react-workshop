import React from "react";

export default function TodoItem({ item }) {
  return (
    <div className="todo-item">
      <input type="checkbox" />
      <p>{item.name}</p>
    </div>
  );
}
