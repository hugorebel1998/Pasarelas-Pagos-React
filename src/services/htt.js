import axios from "axios";

const baseURL = import.meta.env.VITE_URL_API;

const http = axios.create({ baseURL });

http.interceptors.response.use(({ data }) => data);

export default http;