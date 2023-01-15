import { GetServerSideProps, GetServerSidePropsContext, GetServerSidePropsResult } from "next";
import { parseCookies, destroyCookie } from "nookies";
import { AuthTokenError } from "../services/Err/AuthTokenError";

 
//função paginas que apenas user logado tem acesso
export function canSSRAuth<P>(fn: GetServerSideProps<P>) {
    return async (ctx: GetServerSidePropsContext): Promise<GetServerSidePropsResult<P>> => {
        const cookies = parseCookies(ctx);

        const token = cookies['@medcloud.token'];

        if(!token){
            return{
                redirect:{
                    destination: '/',
                    permanent: false,
                }
            }
        }

        try{
            return await fn(ctx);
        }catch(err){
            if(err instanceof AuthTokenError){
                destroyCookie(ctx, '@medcloud.token')

                return{
                    redirect:{
                        destination: '/',
                        permanent: false,
                    }
                }
            }
        }
    }
}