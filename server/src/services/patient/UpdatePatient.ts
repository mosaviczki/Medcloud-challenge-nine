import prismaClient from "../../prisma";

interface InputUpdate{
    idpatient: string;
    phone: bigint;
    email: string;
    adress: string;
    numberAdress: number;
    district: string;
    complement: string;
    zipcode: bigint;
    city: string;
    uf: string;

}
class UpdatePatient{
    async execute({idpatient, email}: InputUpdate){
        const updatePatient = await prismaClient.patient.update({
            where: {
              idpatient: idpatient,
            },
            data: {
              email: email
            },
          })
    }
}

export {UpdatePatient}