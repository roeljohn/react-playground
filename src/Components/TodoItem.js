import React from "react"; 
import { useDispatch } from "react-redux";
import { completeTodo } from "../actions/todo";

function TodoItem(props) {
    const { id, title, completed } = props.todo;
    const dispatch = useDispatch();
    return <li>{ title }<input
    type="checkbox"
    checked={completed}
    onChange={() => dispatch(completeTodo(id))}
  /></li>;
}
export default TodoItem;