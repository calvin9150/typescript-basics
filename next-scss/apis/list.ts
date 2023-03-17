import { request } from "./api";
import { GetListResponse } from "./types";

export const getList = () => {
  return request<GetListResponse[]>({ method: "GET", url: "/list" });
};
