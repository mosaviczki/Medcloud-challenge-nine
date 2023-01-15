import axios, { AxiosError } from "axios";
import { parseCookies } from "nookies";
import { signOut } from "../contexts/AuthContext";
import { AuthTokenError } from "./Err/AuthTokenError";


export function setupAPIClient(ctx = undefined){
    let cookies = parseCookies(ctx);

    const api = axios.create({
        baseURL: 'http://localhost:3001',
        headers: {
            Authorization: `Bearer ${cookies['@medcloud.token']}`
        }
    })

    api.interceptors.response.use(response => {
        return response;
    }, (error: AxiosError) => {
        //Qualquer erro 401 deve ser deslogado o usuario
        if(error.response?.status === 401){
            if(typeof window !== undefined){
                //chama a função de deslogar user
                signOut();
            }else{
                return Promise.reject(new AuthTokenError)
            }
        }

        return Promise.reject(error);
    })

    return api;
}