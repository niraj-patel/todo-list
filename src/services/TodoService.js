import { get } from "../utils/http.js";

export const fetchTodos = async () => {
  try {
    const { data } = await get({ url: "https://dummyjson.com/todos" });
    return data;
  } catch (error) {
    console.log("Error while fetching todos: ", error);
    return error;
  }
};
