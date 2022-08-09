import { FIVERR_API } from "constants/http";
import { http } from "./baseServices";

export const manageUserService = {
  getListUserService() {
    return http.get<HttpResponse<any>>(`${FIVERR_API}/users`); /* api 1 */
  },
  createAdminUserService(infoRegister: {}) {
    return http.post<HttpResponse<any>>(`${FIVERR_API}/users`, infoRegister); /* api 2 */
  },

  getInfoDetailUserService: (userId: string) => {
    return http.get<HttpResponse<any>>(`${FIVERR_API}/users/${userId}`); /* api 3 */
  },

  updateInfoUserService: (userId: string, infoUpdate: {}) =>
    http.put<HttpResponse<any>>(`${FIVERR_API}/users/${userId}`, infoUpdate) /* api 4 */,
  deleteUserService: (userId: string) => {
    return http.delete<HttpResponse<any>>(`${FIVERR_API}/users/${userId}`); /* api 5 */
  },

  uploadAvatarService: (formData: any) =>
    http.post<HttpResponse<any>>(`${FIVERR_API}/users/upload-avatar`, formData) /* api 6 */,

  searchUserService: (valueSearch: string) =>
    http.get<HttpResponse<any>>(
      `${FIVERR_API}/users/pagination-search?name=${valueSearch}&skip=0&limit=3`
    ) /* api 7 */,

  customerRegisterService: (infoRegister: {}) => {
    return http.post<HttpResponse<any>>(`${FIVERR_API}/auth/signup`, infoRegister); /* api 31 */
  },

  memberLoginService: (infoLogin: {}) => {
    return http.post<HttpResponse<any>>(`${FIVERR_API}/auth/signin`, infoLogin); /* api 32 */
  },
};
