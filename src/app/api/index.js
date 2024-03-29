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

export const getCategories = async () => {
  const response = await authApi.get("categories");
  return response.data;
};

export const getCategoryItems = async (category) => {
  const response = await authApi.get(`items?category=${category}`);
  return response.data;
};

export const getItemById = async (id) => {
  const response = await authApi.get(`items/${id}`);
  return response.data;
};
