import api from "./index.js";

export async function predictMLModel(data) {
  const res = await api.post("/model/predict", data);
  return res.data?.result.output;
}
