import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:4500",
  timeout: 3 * 60 * 1000,
  headers: {
    "Content-Type": "application/json"
    // Add any other headers you need
  }
});

export function authHeader() {
  const authToken = localStorage.getItem("authToken");

  if (authToken) {
    return {
      headers: { Authorization: "Bearer " + authToken },
      withCredentials: true
    };
  } else return {};
}

export default api;
