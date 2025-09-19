import axios from "axios";

const axiosSecure = axios.create({
  baseURL: "/api",
  withCredentials: true, 
});

export default axiosSecure;


