import React from "react";
import useTodos from "../hooks/useTodos";
import TodoItem from "./TodoItem";

function TodoList() {
  const todos = useTodos();

  if (todos.length === 0) return <p>일정을 등록하세요</p>;

  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem todo={todo} key={todo.id} />
      ))}
    </ul>
  );
}

export default TodoList;
