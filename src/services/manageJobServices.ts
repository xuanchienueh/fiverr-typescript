import { http } from "./baseServices";
import { FIVERR_API } from "constants/http";

export const manageJobServices = {
  createYourJobService: (model: any) =>
    http.post<HttpResponse<any>>(`${FIVERR_API}/jobs`, model) /* api 19 */,

  getListJobService: () => http.get<HttpResponse<any>>(`${FIVERR_API}/jobs`) /* api 20 */,

  deleteJobService: (idJob: string) =>
    http.delete<HttpResponse<any>>(`${FIVERR_API}/jobs/${idJob}`) /* api 21 */,

  updateJobService: (idJob: string, model: any) => {
    http.put<HttpResponse<any>>(`${FIVERR_API}/jobs/${idJob}`, model); /* api 22 */
  },

  getDetailJobService: (idJob: string) =>
    http.get<HttpResponse<any>>(`${FIVERR_API}/jobs/${idJob}`) /* api 23 */,

  getListJobBaseMainJobService: (typeJobId: string) => {
    return http.get<HttpResponse<any>>(
      `${FIVERR_API}/jobs/by-type?type=${typeJobId}&skip=0&llimit=20` /* api 25 */
    );
  },

  bookService: (idService: string) =>
    http.patch<HttpResponse<any>>(`${FIVERR_API}/jobs/booking/${idService}` /* api 26 */),

  getListServiceUserBoughtService: () =>
    http.get<HttpResponse<any>>(`${FIVERR_API}/jobs/by-user`) /* api 27 */,

  searchJobByNameService: (valueSearch: string) =>
    http.get<HttpResponse<any>>(`${FIVERR_API}/jobs/by-name?name=${valueSearch}`) /* api 29 */,

  uploadImgJobService: (idJob: string, formData: any) =>
    http.post<HttpResponse<any>>(`${FIVERR_API}/jobs/upload-image/${idJob}`, formData) /* api 30 */,
};
