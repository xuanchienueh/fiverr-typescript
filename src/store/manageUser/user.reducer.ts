import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TOKEN, USER_LOGIN } from "utils/setting/config";
let infoUserLogin: any = localStorage.getItem(USER_LOGIN);
let infoUserLoginInit = JSON.parse(infoUserLogin);

type infoLogin = {
  message?: string;
  token?: string;
  user: {
    avatar?: string;
    birthday?: string;
    bookingJob?: string[];
    certification?: string[];
    deleteAt?: boolean;
    email: string;
    gender?: boolean;
    name?: string;
    password?: string;
    phone?: string;
    role?: string;
    skill?: string[];
    __v?: number;
    _id: string;
  };
};

interface InitState {
  listAllUser?: [];
  infoUserLogin: infoLogin;
}

const initialState: InitState = {
  listAllUser: [],
  infoUserLogin: infoUserLoginInit || {},
};

export const { reducer: userReducer, actions: userAction } = createSlice({
  initialState,
  name: "manageUser",
  reducers: {
    getAllUser(state, actions: PayloadAction<any>) {
      // console.log(actions.payload);
      state.listAllUser = actions.payload;
    },

    getInfoUserLogin(state, actions: PayloadAction<any>) {
      localStorage.setItem(TOKEN, actions.payload.token);
      localStorage.setItem(USER_LOGIN, JSON.stringify(actions.payload));
      state.infoUserLogin = actions.payload;
    },
  },
});
