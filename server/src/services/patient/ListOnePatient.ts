import prismaClient from "../../prisma";

interface PatientRequest{
    idpatient: string;
}
class ListOnePatient{
    async execute({idpatient}: PatientRequest){
        const findByPatients = await prismaClient.patient.findUnique({
            where:{
                idpatient: idpatient
            },
            select:{
                name: true,
                birth: true,
                phone: true,
                cpf: true,
                rg: true,
                email: true,
                adress: true,
                numberAdress: true,
                district:true,
                complement:true,
                zipcode:true,
                city :true,
                uf:true
            }
        })

        return findByPatients;
    }
}
export {ListOnePatient}