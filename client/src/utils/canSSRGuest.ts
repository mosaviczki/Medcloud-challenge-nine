import { GetServerSideProps, GetServerSidePropsContext, GetServerSidePropsResult } from "next";
import { parseCookies } from "nookies";

export function canSSRGuest<P>(fn: GetServerSideProps<P>) {
    return async (ctx: GetServerSidePropsContext): Promise<GetServerSidePropsResult<P>> => {
        const cookies = parseCookies(ctx);

        //Se tentar acessar pagina estando logado
        if(cookies['@medcloud.token']){
            return{
                redirect:{
                    destination: '/dashboard',
                    permanent: false
                }
            }
        }
        
        return await fn(ctx);
    }
}