import React, { useCallback } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../module/todos";

function useAddTodo() {
  const dispatch = useDispatch();

  return useCallback((text: string) => dispatch(addTodo(text)), [dispatch]);
}

export default useAddTodo;
