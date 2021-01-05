import React from "react";

export default function TodoItem({ item, updateTodo }) {
  const handleChange = (event) => {
    const updatedItem = { ...item, completed: event.target.checked };
    updateTodo(updatedItem);
  };
  return (
    <div className="todo-item">
      <input type="checkbox" checked={item.completed} onChange={handleChange} />
      <p>{item.name}</p>
    </div>
  );
}
