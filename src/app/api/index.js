import axios from "axios";

const BASE_URL = "http://localhost:3000/";

const authApi = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
});

authApi.defaults.headers.common["Content-Type"] = "application/json";

export const loginUser = async (user) => {
  const response = await authApi.post("auth/login", user);
  return response.data;
};

export const signupUser = async (data) => {
  const response = await authApi.post("user", data);
  return response.data;
};
