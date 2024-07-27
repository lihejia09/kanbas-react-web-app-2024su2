import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, updateTodo, setTodo } from "./todosReducer";

export default function TodoForm() {
  const { todo } = useSelector((state: any) => state.todosReducer);
  const dispatch = useDispatch();
  return (
    <li className="list-group-item">
      <button
        className="btn btn-success mx-1 my-1 float-end"
        onClick={() => dispatch(addTodo(todo))}
        id="wd-add-todo-click"> Add </button>
      <button
        className="btn btn-warning mx-1 my-1 float-end"
        onClick={() => dispatch(updateTodo(todo))}
        id="wd-update-todo-click"> Update </button>
      <input
        className="d-flex justify-content-between align-items-center mx-1 my-2"
        value={todo.title}
        onChange={(e) => dispatch(setTodo({ ...todo, title: e.target.value }))} />
    </li>
  );
}
