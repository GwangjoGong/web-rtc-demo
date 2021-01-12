import axios from "axios";

const axiosInstance = axios.create({
  baseURL: `https://dm-rtc-demo-server.herokuapp.com:4000`,
});

export const getToken = () => {
  return axiosInstance.get("/token");
};
