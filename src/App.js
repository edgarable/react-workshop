import "./App.css";
import DoneList from "./components/DoneList.js";
import TodoList from "./components/TodoList.js";
import TodoForm from "./components/TodoForm.js";

function App() {
  return (
    <div className="App">
      <h1>My App</h1>
      <TodoForm />
      <div className="list-container">
        <TodoList />
        <DoneList />
      </div>
    </div>
  );
}

export default App;
