import React, { useState } from "react";
import useAddTodo from "../hooks/useAddTodo";

function TodoInsert() {
  const [value, setValue] = useState("");

  const addTodo = useAddTodo();

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addTodo(value);
    setValue("");
  };

  return (
    <form onSubmit={onSubmit}>
      <input placeholder="Insert Todo" value={value} onChange={onChange} />
      <button type="submit">submit</button>
    </form>
  );
}

export default TodoInsert;
