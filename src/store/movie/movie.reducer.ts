import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface InitState {
  listAllUser?: [];
}

const initialState: InitState = {
  listAllUser: [],
};

export const { reducer: userReducer, actions: userAction } = createSlice({
  initialState,
  name: "manageUser",
  reducers: {
    getAllUser(state, actions: PayloadAction<any>) {
      console.log(actions.payload);
      state.listAllUser = actions.payload;
    },
  },
});
