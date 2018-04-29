import axios from "axios";

axios.defaults.baseURL = process.env.REST_ENDPOINT;

export default function baseService(method, url, data) {
  return axios({
    method,
    url,
    data
  });
}
