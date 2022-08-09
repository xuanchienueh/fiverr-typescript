declare type HttpResponse<T = undefined> = {
  data?: T;
  message?: string;
  statusCode?: number;
};
