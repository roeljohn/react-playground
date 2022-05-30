import React from "react"; 
import { useDispatch, useSelector } from "react-redux";
import TodoItem from '../Components/TodoItem';

function Todo(){
    const todos = useSelector((state) => state.todos.todos);

    return(
        <>{todos && todos.map((todo, index) => <TodoItem todo={todo} key={index} />)}</>
    )
}
export default Todo;