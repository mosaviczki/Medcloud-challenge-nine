import prismaClient from "../../prisma";
import { hash } from "bcryptjs";

interface UserRequest{
    name: string,
    phone: bigint,
    email: string,
    password: string,
    confPassword: string
}
class CreateUser{
    async execute({name, phone, email, password, confPassword}: UserRequest){
        
        //verificando se enviou email
        if(!email){
            throw new Error("Insira um email")
        }

        const userAlreadyExists = await prismaClient.user.findFirst({
            where:{
                email: email
            }
        })

        if (userAlreadyExists){
            throw new Error("Usuario já existe!")
        }

        if (password != confPassword){
            throw new Error("As senhas devem ser iguais!")
        }

        const passwordHash = await hash(password, 8)
        const user = await prismaClient.user.create({
            data:{
                name: name,
                phone: phone,
                email: email,
                password: passwordHash
            },
            select:{
                iduser: true,
                name: true,
                phone: true,
                email:true
            }
        })

        return user
    }
}
export {CreateUser}