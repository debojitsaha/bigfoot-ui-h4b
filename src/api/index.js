import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:4500",
  timeout: 3 * 60 * 1000,
});

export function authHeader() {
  const authToken = localStorage.getItem("token");

  if (authToken) {
    return {
      headers: { Authorization: "Bearer " + authToken },
      withCredentials: true,
    };
  } else return {};
}

export default api;