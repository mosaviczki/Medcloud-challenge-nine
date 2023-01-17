import prismaClient from "../../prisma";
import { hash } from "bcryptjs";

interface IdForUpdate{
    user_id: string;
    phone: string,
    email: string,
    password: string,
    confPassword: string
}

class UpdateUser{
    async execute({user_id, phone, email, password, confPassword}: IdForUpdate){

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
        
        const updateUser = await prismaClient.user.update({
            where: {
                iduser: user_id,
            },
            data: {
                phone: phone,
                email: email,
                password: passwordHash
            }
        })
        return updateUser;
    }
}

export { UpdateUser }