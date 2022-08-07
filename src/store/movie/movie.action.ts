import { createAsyncThunk } from "@reduxjs/toolkit";
import { manageUserService } from "services/manageUserServices";
import { userAction } from "./movie.reducer";

export const getAllUserAction = createAsyncThunk("manageUser", async (_, { dispatch }) => {
  try {
    const res = await manageUserService.getAllUserService();
    if (res?.data) {
      dispatch(userAction.getAllUser(res.data));
    }
  } catch (err) {
    console.log(err);
  }
});
