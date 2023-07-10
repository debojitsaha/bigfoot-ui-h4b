import api, { authHeader } from "./index.js";

export async function CreateUser(user) {
  const res = await api.post("/user/register", user);
  return res.data?.result;
}

export async function LoginUser(user) {
  const res = await api.post("/user/login", user);
  return res.data?.result;
}

export async function FetchUser() {
  const res = await api.get("/user/", authHeader());
  return res.data?.result.user;
}
