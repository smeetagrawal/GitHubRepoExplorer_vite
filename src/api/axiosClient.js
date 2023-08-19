import axios from "axios";

const axiosClient = axios.create({
  baseURL: import.meta.env.VITE_GITHUB_API_ENDPOINT,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

export default axiosClient;
