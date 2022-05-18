import axios from "axios";
import { TIMEOUT, BASE_URL } from "./config";

export function request(opts) {
  const instance = axios.create({
    baseURL: BASE_URL,
    timeout: TIMEOUT,
  });

  instance.interceptors.request.use(
    (config) => {
      return config;
    },
    (err) => {
      console.error("=>there happens error when request", err);
    }
  );

  instance.interceptors.response.use(
    (res) => {
      return res.data;
    },
    (err) => {
      /*     if(err && err.request.status){
      switch(err.request.status){}
    } */
      console.error("<=there happens error when response", err);
    }
  );

  return instance(opts);
}
