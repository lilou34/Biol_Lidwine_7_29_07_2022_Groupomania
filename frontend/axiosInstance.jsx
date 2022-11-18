import axios from "axios";

// Creates an instance to use with Axios calls

const instance = axios.create({
  baseURL: import.meta.env.VITE_URL_BACK,
  timeout: 5000,
  headers: {
    "Content-type": "application/json",
    timeout : 1000,
  },
});

export default instance;
