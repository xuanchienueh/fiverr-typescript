import { combineReducers } from "@reduxjs/toolkit";
import { userReducer } from "./movie";

export const rootReducer = combineReducers({
  movie: userReducer,
});
