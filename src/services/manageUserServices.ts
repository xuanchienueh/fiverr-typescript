import { FIVERR_API } from "../constants/http";
import { http } from "./baseServices";

export const manageUserService = {
  getAllUserService() {
    return http.get<HttpResponse<any>>(`${FIVERR_API}/users`); /* api 1 */
  },
};
