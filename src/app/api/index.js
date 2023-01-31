import axios from "axios";

const BASE_URL = "https://express-shop-api-production.up.railway.app/";

const authApi = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
});

authApi.defaults.headers.common["Content-Type"] = "application/json";

export const loginUser = async (user) => {
  const response = await authApi.post("auth/login", user);
  return response.data;
};
