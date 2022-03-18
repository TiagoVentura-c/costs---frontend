import axios from 'axios'
import { getToken } from "./auth";

const BASE_URL = `${process.env.REACT_APP_API_URL}/api`;

const api = axios.create({
    baseURL: BASE_URL,
    responseType: 'json'
});

const apiAuth = axios.create({
    baseURL: `${process.env.REACT_APP_API_URL}`,
    responseType: 'json'
});


api.interceptors.request.use(async config => {
    const token = getToken();
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

export function auth(url, user){    
    return apiAuth.post(`${url}`, user)
}


export function fetch(url){
    return api.get(`${BASE_URL}/${url}`)
}

export function Delete(url){
    return api.delete(`${BASE_URL}/${url}`)
}

export function add(url ,project){
    return api.post(`${BASE_URL}/${url}`, project)
}

export function patch(url, project){
    return api.put(`${BASE_URL}/${url}`, project)
}
