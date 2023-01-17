import { createContext, ReactNode, useState, useEffect} from "react";
import {destroyCookie, setCookie, parseCookies} from 'nookies';
import Router, { useRouter } from "next/router";
import { api } from "../services/apiClient";
import { toast } from "react-toastify";

type AuthContextData = {
    user: UserProps | undefined;
    isAuthenticated: boolean;
    signIn:(credential: SignInProps)=> Promise<void>;
    signOut: () => void;
    signUp: (credential: SignUpProps)=> Promise<void>;
}
type UserProps = {
    iduser: string;
    phone: string;
    name: string;
    email:string;
}
type SignInProps = {
    email: string;
    password: string;
}

type SignUpProps = {
    name: string;
    phone: string;
    email: string;
    password: string;
    confPassword: string;
}

type AuthProviderProps = {
    children: ReactNode;
}

export const AuthContext = createContext({} as AuthContextData)

export function signOut(){
    try{
        destroyCookie(undefined, '@medcloud.token');
        Router.push('/')
    }catch{
        console.log("Erro ao deslogar")
    }
}

export function AuthProvider({children}: AuthProviderProps){
    const [user, setUser] = useState<UserProps>()
    const isAuthenticated = !!user;
    const router = useRouter()

    useEffect(()=>{
        // acessar dados do cookie
        const { '@medcloud.token': token } = parseCookies();

        if(token){
            api.get('/YourAccount').then(response =>{
                const {iduser, name, phone, email} = response.data;

                setUser({
                    iduser, name, phone, email
                })
            })
            .catch(() => {
                signOut();
            })
        }
    }, [])

    async function signIn({email, password}: SignInProps){
        try{
            const response = await api.post('/login', {
                email,
                password
            })
            const {iduser, name, phone, token} = response.data;

            setCookie(undefined, '@medcloud.token', token,{
                maxAge: 60*60*24*30,  //expira 1 mes
                path: '/'
            })

            setUser({
                iduser,
                name,
                phone,
                email
            })

            //Passar o token para proximas requisições
            api.defaults.headers['Authorization'] = `Bearer ${token}`

            Router.push('/dashboard')

        }catch(err){
            toast.error("Insira um email e/ou senha válido")
        }
    }

    async function signUp({name, phone, email, password, confPassword}: SignUpProps){
        try{
            const response = await api.post('/cadastro',{
                name, phone, email, password, confPassword
            })
            toast.success("Usuario cadastrado com sucesso!")
            Router.push('/')
        }catch(err){
            toast.error("Erro ao cadastrar")
        }
    }
    return(
        <AuthContext.Provider value={{user, isAuthenticated, signIn, signOut, signUp}}>
            {children}
        </AuthContext.Provider>
    )
}
