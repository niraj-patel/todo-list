const inititalState = {
  todos: [],
};

export function todos(state = inititalState, action) {
  const { type, payload } = action;

  switch (type) {
    case "FETCH_TODOS":
      return { ...state, todos: payload.todos };

    default:
      return state.todos;
  }
}
