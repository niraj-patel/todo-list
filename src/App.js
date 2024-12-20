import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import "./App.css";
import logo from "./logo.svg";
import { getTodos } from "./actions/todos.js";

function App() {
  const dispatch = useDispatch();
  const todosList = useSelector((state) => state.todos);

  useEffect(() => {
    dispatch(getTodos());
  }, [dispatch]);

  return (
    <div className="App">
      <div>
        {todosList?.todos?.map((singleTodo) => (
          <p key={singleTodo.id}>{singleTodo.todo}</p>
        ))}
      </div>
    </div>
  );
}

export default App;
