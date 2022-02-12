import axios from 'axios'
import { getToken, saveToken } from "./auth";

const BASE_URL="http://localhost:8080/api"

const api = axios.create({
    baseURL: BASE_URL,
    responseType: 'json'
});


api.interceptors.request.use(async config => {
    const token = getToken();
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

export async function login(user){    
    const response = await axios.post(`http://localhost:8080/login`, user)
    
    if((response).status === 200){
        await saveToken(response.data)
    }

    /**
    axios.post(`http://localhost:8080/login`, user)
    .then(response => {
        if(response.status === 200){
        saveToken(response.data)
    }
    })
    .catch(error => console.log(error))   */
    
}

export function signin(user){
   return axios.post(`http://localhost:8080/signin`, user)
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
