import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Counter from "./components/Counter";
import TodoList from "./components/TodoList";
import TodoInsert from "./components/TodoInsert";

function App() {
  return (
    <>
      <Counter />
      <TodoInsert />
      <TodoList />
    </>
  );
}

export default App;
