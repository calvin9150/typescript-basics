import axios, { AxiosRequestConfig } from "axios";
import { ApiError } from "next/dist/server/api-utils";

const instance = axios.create({
  baseURL: "https://picsum.photos/v2",
});

export const request = async <T = unknown>(
  config: AxiosRequestConfig
): Promise<T> => {
  try {
    const { data, status } = await instance(config);
    console.log("data", data);

    if (status === 200) {
      return data;
    }

    throw new ApiError(status, data.message);
  } catch (err: any) {
    console.error(err);

    throw new Error(err);
  }
};
