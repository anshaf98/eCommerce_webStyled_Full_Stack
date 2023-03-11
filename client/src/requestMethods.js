import axios from "axios";

const BASE_URL = "http://localhost:5000/api/";
const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzMWExNDIxODQwNGVhZTIwZTI1YTkyZSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY2MjcxMjgyMSwiZXhwIjoxNjYyOTcyMDIxfQ.J2w-XDiI0RKQiUO5uf_0HaaZqSgIjQn0LL9m949GXYM";

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  header: { token: `Bearer ${TOKEN}` },
});
