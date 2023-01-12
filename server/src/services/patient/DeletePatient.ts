import prismaClient from "../../prisma";

interface IdForDelete{
    idpatient: string;
}
class DeletePatient{
    async execute({idpatient}: IdForDelete){
        const deletePatient = await prismaClient.patient.delete({
            where: {
                idpatient: idpatient,
            }
        })
        return deletePatient;
    }
}

export {DeletePatient}