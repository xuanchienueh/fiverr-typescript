import { manageJobServices } from "./../../services/manageJobServices";
import { manageJobAction } from "./manageJob.reducer";

export const getlistServiceUserBoughtAction = (): any => {
  return async (dispatch: any) => {
    try {
      let res = await manageJobServices.getListServiceUserBoughtService();
      if (res?.data?.bookingJob) {
        dispatch(manageJobAction.getlistServiceUserBought(res.data.bookingJob));
      }
    } catch (err) {
      console.log("getlistServiceUserBoughtAction fail", err);
    }
  };
};
