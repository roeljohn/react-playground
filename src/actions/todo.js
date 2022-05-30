import axios from "axios";

export function getAllTodo() {
    return dispatch => {
      axios.get(`https://5cea41c50c871100140bf437.mockapi.io/api/v1/todos`)
      .then(res =>
        dispatch({
          type: "FETCH_ALL_TODO",
          todos: res.data
        })
      );
    };
}
