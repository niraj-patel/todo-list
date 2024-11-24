import { configureStore } from "@reduxjs/toolkit";

import rootReducers from "./reducers.js";

export default configureStore({
  reducer: rootReducers,
  initialState: {},
});
