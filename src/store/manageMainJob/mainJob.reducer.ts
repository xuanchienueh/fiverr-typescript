import { createSlice, PayloadAction } from "@reduxjs/toolkit";
export type listMainJob = {
  deleteAt?: boolean;
  name?: string;
  status?: boolean;
  subTypeJobs: object[];
  __v?: number;
  _id: string;
};

interface InitialState {
  listMainJob: listMainJob[];
  subTypeMainJob: {};
}

const initialState: InitialState = {
  listMainJob: [],
  subTypeMainJob: {},
};

export const { reducer: mainJobReducer, actions: mainJobAction } = createSlice({
  initialState,
  name: "manageMainJob",
  reducers: {
    getListMainJob: (state, actions: PayloadAction<any>) => {
      state.listMainJob = actions.payload;
    },
  },
});
