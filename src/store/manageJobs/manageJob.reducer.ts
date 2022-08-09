import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ServiceOfUser } from "@type/ServiceOfUser";

interface InitialState {
  listServiceUserBought: ServiceOfUser[];
}

const initialState: InitialState = {
  listServiceUserBought: [],
};

export const { reducer: manageJobReducer, actions: manageJobAction } = createSlice({
  initialState,
  name: "manageJob",
  reducers: {
    getlistServiceUserBought: (state, actions: PayloadAction<any>) => {
      state.listServiceUserBought = actions.payload;
      console.log(actions.payload);
    },
  },
});
