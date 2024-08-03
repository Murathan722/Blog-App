import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./UserSlice";
import formReducer from "./FormSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    form: formReducer,
  },
});
