import React, { useState } from "react";
import uuid from "uuid";

export default function TodoForm({ addTodo }) {
  const [todoItem, setTodoItem] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    addTodo({ name: todoItem, id: uuid(), completed: false });
    setTodoItem("");
  };

  const handleOnChange = (event) => {
    setTodoItem(event.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" onChange={handleOnChange} value={todoItem} />
      <button>Agregar</button>
    </form>
  );
}
