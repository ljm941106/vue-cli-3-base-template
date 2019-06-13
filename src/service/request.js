import axios from "axios";
// import env from "@/config/env";

let baseUrl;
if (process.env.NODE_ENV === "development") {
  baseUrl = "";
} else {
  baseUrl = "";
}
const AJAX = axios.create({
  baseURL: baseUrl,
  timeout: 30000
  // withCredentials: true
});

// 添加请求拦截器
AJAX.interceptors.request.use(
  config => {
    return config;
  },
  error => {
    // 请求错误
    return Promise.reject(error);
  }
);

// 添加响应拦截器
AJAX.interceptors.response.use(
  response => {
    // 响应数据
    return response.data;
  },
  error => {
    console.log(error);
    // 响应错误，比如400、401、402等等
    if (error && error.response) {
      console.log(error.response);
    }
    return Promise.reject(error);
  }
);
const splitParams = params => {
  for (let key in params) {
    url = url.replace("{" + key + "}", encodeURIComponent(params[key]));
  }
};
export default {
  get(url, params = null, data = null) {
    splitParams(params);
    return AJAX.get(url, {
      params: data
    });
  },
  post(url, params = null, data = null) {
    splitParams(params);
    return AJAX.post(url, data);
  }
};
