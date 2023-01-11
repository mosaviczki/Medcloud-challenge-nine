import prismaClient from "../../prisma";

class ListAllPatients{
    async execute(){
        const patients = await prismaClient.patient.findMany({
            select:{
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
    }
}
export {ListAllPatients}