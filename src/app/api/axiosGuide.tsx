import axios from "axios";

const axiosGuide = axios.create({
    // baseURL: "/guide-api",
    baseURL: "/guide-api",
    headers: {
      "Content-Type": "application/json",
    },
});

export default axiosGuide;
