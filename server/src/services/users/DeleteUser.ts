import prismaClient from "../../prisma";

interface IdForDelete{
    user_id: string;
}

class DeleteUser{
    async execute({user_id}: IdForDelete){
        const deleteUser = await prismaClient.user.delete({
            where: {
                iduser: user_id,
            }
        })
        return deleteUser;
    }
}

export { DeleteUser }