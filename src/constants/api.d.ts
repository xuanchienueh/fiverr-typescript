declare type HttpResponse<T = undefined> = {
  data?: {
    content?: T;
  };
  message?: string;
  statusCode?: number;
};
