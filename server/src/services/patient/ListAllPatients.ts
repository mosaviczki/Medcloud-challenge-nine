import prismaClient from "../../prisma";

interface PatientRequest{
    userid: string;
}
class ListAllPatients{
    async execute({userid}: PatientRequest){
        const findByPatients = await prismaClient.patient.findMany({
            where:{
                user_id: userid
            },
            select:{
                idpatient: true,
                name: true,
                birth: true,
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
export {ListAllPatients}