import prismaClient from "../../prisma";

interface PatientRequest{
    idpatient: string;
}
class ListOnePatient{
    async execute({idpatient}: PatientRequest){
        console.log(idpatient)
        const findByPatients = await prismaClient.patient.findUnique({
            where:{
                idpatient: idpatient
            },
            select:{
                name: true,
                birth: true,
                email: true,
                adress: true,
                numberAdress: true,
                district:true,
                complement:true,
                //zipcode:true,
                city :true,
                uf:true
            }
        })

        return findByPatients;
    }
}
export {ListOnePatient}