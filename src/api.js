import axios from "axios";

const axiosInstance = axios.create({ baseURL: "http://localhost:4000" });

export const getToken = () => {
  return axiosInstance.get("/token");
};
