import { fetchTodos } from "../services/TodoService.js";

export const getTodos = () => async (dispatch) => {
  const result = await fetchTodos();
  console.log("res", result);
  dispatch({
    type: "FETCH_TODOS",
    payload: { ...result },
  });
};
