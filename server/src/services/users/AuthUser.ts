import { compare } from "bcryptjs";
import prismaClient from "../../prisma";
import { sign } from "jsonwebtoken";

interface AuthRequest{
    email: string;
    password: string;
}
class AuthUser{
    async execute({email, password}: AuthRequest){

        const user = await prismaClient.user.findFirst({
            where:{
                email: email
            }
        })
        //Verifica se usuario existe
        if(!user){
            throw new Error("Usuario e/ou senha incorreta!")
        }

        const passwordMatch = await compare(password, user.password)
        //Verifica se a senha é igual ao cadastrado
        if(!passwordMatch){
            throw new Error("Usuario e/ou senha incorreta!")
        }

        const token = sign(
            {
                name: user.name,
                //phone:  user.phone,
                email: user.email,
            },
            process.env.JWT_SECRET,
            {
                subject: user.iduser,
                expiresIn: '30d'
            }
        )
        return{
            id: user.iduser,
            name: user.name,
            //phone: user.phone,
            email: user.email,
            token: token
        }
        
    }
}
export {AuthUser}