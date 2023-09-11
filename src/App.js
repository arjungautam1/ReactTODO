import React, { useState } from "react";
import "./App.css";
import TodoTable from "./components/TodoTable";
import NewTodoForm from "./components/NewTodoForm";

function App() {
  const [showAddTodoForm, setShowAddTodoForm] = useState(false);

  const [todos, setTodos] = useState([
    { rowNumber: 1, rowDescription: "Feed puppy", rowAssigned: "User One" },
  ]);

  const addTodo = (description, assigned) => {
    const rowNumber =
      todos.length > 0 ? todos[todos.length - 1].rowNumber + 1 : 1;

    const newTodo = {
      rowNumber: rowNumber,
      rowDescription: description,
      rowAssigned: assigned,
    };

    setTodos((todos) => [...todos, newTodo]);
  };

  const deleteTodo = (deleteTodoRowNumber) => {
    let filtered = todos.filter(function (value) {
      return value.rowNumber !== deleteTodoRowNumber;
    });
    setTodos(filtered);
  };

  return (
    <div className="mt-5 container">
      <div className="card">
        <div className="card-body">
          <button
            onClick={() => setShowAddTodoForm(!showAddTodoForm)}
            className="btn btn-primary"
          >
            {showAddTodoForm ? "Close New Todo" : " New Todo"}
          </button>

          {showAddTodoForm && <NewTodoForm addTodo={addTodo} />}

          <div className="card-header mt-3">Your Todo's</div>
          <TodoTable todos={todos} deleteTodo={deleteTodo} />
        </div>
      </div>
    </div>
  );
}

export default App;
