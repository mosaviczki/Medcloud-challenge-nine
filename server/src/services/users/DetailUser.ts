import prismaClient from "../../prisma";

class DetailUser{
    async execute(user_id: string){

        const user = await prismaClient.user.findFirst({
            where:{
                iduser: user_id
            },
            select:{
                iduser: true,
                name: true,
                phone: true,
                email: true
            }
        })
        return user;
    }
}
export {DetailUser}