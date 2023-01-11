import prismaClient from "../../prisma";

interface IdForDelete{
    idpatient: string;
}
class DeletePatient{
    async execute({idpatient}){
        const deletePatient = await prismaClient.patient.delete({
            where: {
                idpatient: idpatient
            },
          })
    }
}

export {DeletePatient}