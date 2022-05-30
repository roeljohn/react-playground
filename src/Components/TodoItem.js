import React from "react"; 
import { useDispatch } from "react-redux";

function TodoItem(props) {
    const { id, title, completed } = props.todo;
    const dispatch = useDispatch();
    const handleComplete = (id) => {
        dispatch({ type: "COMPLETE_TODO", id: id });
    };
    return <li>{ title }             <input
    type="checkbox"
    checked={completed}
    onChange={() => handleComplete(id)}
  /></li>;
}
export default TodoItem;