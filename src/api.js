import axios from "axios";
import { getAuth } from "firebase/auth";
import firebaseApp from "./constants/firebase";

const api = axios.create({
  timeout: 120000,
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.request.use(async (req) => {
  req.headers["usertoken"] =
    (await getAuth(firebaseApp).currentUser?.getIdToken()) ?? "";

  return req;
});

export const query = async (_q) => {
  const response = await api.post("/sql", {
    query: _q,
  });
  return response.data;
};

api.defaults.baseURL =
  "https://us-central1-comp307-finalproject-w2022.cloudfunctions.net/";
// api.defaults.baseURL =
// ("http://localhost:5001/comp307-finalproject-w2022/us-central1");

export default api;
