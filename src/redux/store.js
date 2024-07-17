import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counter/counterSlice";
import textReducer from "./text/textSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    text: textReducer,
  },
});
