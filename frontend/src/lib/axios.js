import axios from "axios";

const isDev = import.meta.env.MODE === "development";
const baseURL = isDev ? "http://localhost:4000/api" : "/api";

const axiosInstance = axios.create({
  baseURL,
});

export default axiosInstance;
