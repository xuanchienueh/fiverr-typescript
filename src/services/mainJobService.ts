import { FIVERR_API } from "constants/http";
import { http } from "./baseServices";

export const mainJobService = {
  createMainJobService(mainJob: any) {
    return http.post<HttpResponse<any>>(`${FIVERR_API}/type-jobs`, mainJob); /* api 13 */
  },

  getListTypeMainJobService() {
    return http.get<HttpResponse<any>>(`${FIVERR_API}/type-jobs`); /* api 14 */
  },

  deleteMainJobService(idMainJob: string) {
    return http.delete<HttpResponse<any>>(`${FIVERR_API}/type-jobs/${idMainJob}`); /* api 15 */
  },

  updateMainJobService(idMainJob: string, value: object) {
    return http.put<HttpResponse<any>>(`${FIVERR_API}/type-jobs/${idMainJob}`, value); /* api 16 */
  },

  getDetailTypeMainJobService(idMainJob: string) {
    return http.get<HttpResponse<any>>(`${FIVERR_API}/type-jobs/${idMainJob}`); /* api 17 */
  },
};
