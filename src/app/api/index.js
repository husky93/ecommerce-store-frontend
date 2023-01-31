import axios from "axios";

const BASE_URL = "https://express-shop-api-production.up.railway.app/";

const authApi = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
});

authApi.defaults.headers.common["Content-Type"] = "application/json";
