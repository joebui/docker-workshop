import { GET_TODOS_SUCCESS } from "../actions/types";

export default function reducer(
  state = {
    todos: []
  },
  action
) {
  switch (action.type) {
    case GET_TODOS_SUCCESS:
      return Object.assign({}, state, {
        todos: action.todos
      });
    default:
      return state;
  }
}
