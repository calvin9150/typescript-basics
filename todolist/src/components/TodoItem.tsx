import React from "react";
import { Todo, useTodosDispatch } from "../contexts/TodosContext";
import "./TodoItem.css";

export type TodoItemProps = {
  todo: Todo;
};

function TodoItem({ todo }: TodoItemProps) {
  const dispatch = useTodosDispatch();

  const onToggle = () => {
    dispatch({
      type: "TOGGLE",
      id: todo.id,
    });
  };

  return (
    <li className={`TodoItem ${todo.done ? "done" : ""}`}>
      <span className="text">{todo.text}</span>
      <span className="remove" onClick={onToggle}>
        (X)
      </span>
    </li>
  );
}

export default TodoItem;
