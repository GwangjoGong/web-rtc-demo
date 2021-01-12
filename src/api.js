import axios from "axios";

const axiosInstance = axios.create({ baseURL: "http://54.180.211.107:4000" });

export const getToken = () => {
  return axiosInstance.get("/token");
};
