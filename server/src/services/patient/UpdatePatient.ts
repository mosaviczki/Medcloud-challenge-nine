import prismaClient from "../../prisma";

interface IdForUpdate{
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
  async execute({idpatient, phone, email, adress, numberAdress, district, complement, zipcode, city, uf}: IdForUpdate){

      const userAlreadyExists = await prismaClient.patient.findFirst({
          where:{
              email: email,
          }
      })

      if (userAlreadyExists){
          throw new Error("Usuario já existe!")
      }
      
      const updatePatient = await prismaClient.patient.update({
          where: {
              idpatient: idpatient,
          },
          data: {
            phone: phone,
            email: email,
            adress: adress,
            numberAdress: numberAdress,
            district: district,
            complement: complement,
            zipcode: zipcode,
            city: city,
            uf: uf
          }
      })
      return updatePatient;
  }
}

export {UpdatePatient}