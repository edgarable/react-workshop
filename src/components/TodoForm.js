import React from "react";

export default function TodoForm() {
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("HOLA!!!");
  };
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" />
      <button>Agregar</button>
    </form>
  );
}
