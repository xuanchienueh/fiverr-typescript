import { mainJobService } from "services/mainJobService";
import { mainJobAction } from "./mainJob.reducer";

export const getListTypeMainJobAction = (): any => {
  return async (dispatch: any, getState: any) => {
    //   dispatch(showLoading());
    try {
      let res = await mainJobService.getListTypeMainJobService();
      if (res?.data) {
        dispatch(mainJobAction.getListMainJob(res.data));
      }
      // dispatch(hideLoading());
    } catch (err) {
      console.log("getListTypeMainJob fail", err);
      // dispatch(hideLoading());
    }
  };
};
