import { createAsyncThunk } from "@reduxjs/toolkit";
import { manageUserService } from "services/manageUserServices";
import Swal from "sweetalert2";
import { userAction } from "./user.reducer";

export const getListUserAction = () => {
  return async (dispatch: any) => {
    try {
      const res = await manageUserService.getListUserService();
      if (res?.data) {
        dispatch(userAction.getAllUser(res.data));
      }
    } catch (err) {
      console.log(err);
    }
  };
};

export const memberLoginAction = (
  infoLogin: { email: string; password: string },
  navigate: any
): any => {
  return async (dispatch: any) => {
    try {
      const res = await manageUserService.memberLoginService(infoLogin);
      if (res?.data) {
        dispatch(userAction.getInfoUserLogin(res.data));
        navigate("/", { replace: true });
      }
    } catch (err) {
      console.log(err);
      Swal.fire({
        position: "center",
        icon: "error",
        title: "Email or password is incorrect",
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };
};
/* export const getListUserAction = createAsyncThunk("manageUser", async (_, { dispatch }) => {
  try {
    const res = await manageUserService.getListUserService();
    if (res?.data) {
      dispatch(userAction.getAllUser(res.data));
    }
  } catch (err) {
    console.log(err);
  }
}); */
