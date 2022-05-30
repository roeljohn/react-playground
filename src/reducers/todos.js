function todos(state = { todos: ""}, action) {
    switch (action.type) {
        case "FETCH_ALL_TODO":
            return {
                ...state,
                todos: action.todos
            };
        case "COMPLETE_TODO":
            return {
                ...state,
                todos: state.todos.map((todo) => {
                    if (todo.id === action.id) {
                        return { ...todo, completed: !todo.completed };
                    } else {
                        return todo;
                    }
                })
            }
            
        default:
            return state;
    }
  }
  
  export default todos;