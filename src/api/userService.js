import api, { authHeader } from "./index.js";

export async function CreateUser(user) {
  const res = await api.post("/user/register", { user });
  console.log(res.data?.result);
}

export async function LoginUser(user) {
  const res = await api.post("/user/login", { user });
  console.log(res.data?.result);
}
