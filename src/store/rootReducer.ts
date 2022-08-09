import { combineReducers } from "@reduxjs/toolkit";
import { manageJobReducer } from "./manageJobs/manageJob.reducer";
import { mainJobReducer } from "./manageMainJob/mainJob.reducer";
import { userReducer } from "./manageUser";

export const rootReducer = combineReducers({
  manageUserReducer: userReducer,
  manageMainJobReducer: mainJobReducer,
  manageJobReducer: manageJobReducer,
});
