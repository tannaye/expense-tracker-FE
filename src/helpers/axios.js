import axios from "axios";
// import AsyncStorage from '@react-native-async-storage/async-storage'; change to local storage

//apply base url for axios
const API_URL = process.env.REACT_APP_URL;

const axiosApi = axios.create({
  baseURL: API_URL,
});

axiosApi.defaults.headers.common.Authorization =
  "Bearer " + process.env.REACT_APP_TOKEN;

axiosApi.interceptors.response.use(
  (response) => response,
  (error) => Promise.reject(error)
);

export async function get(url, config = {}) {
  return await axiosApi.get(url, { ...config });
}

export async function post(url, data, config = {}) {
  return axiosApi.post(url, data, { ...config });
}

export async function put(url, data, config = {}) {
  return axiosApi.put(url, data, { ...config });
}

export async function patch(url, data, config = {}) {
  return axiosApi.patch(url, data, { ...config });
}

export async function del(url, config = {}) {
  return await axiosApi.delete(url, { ...config });
}
