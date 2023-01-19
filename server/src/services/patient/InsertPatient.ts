import prismaClient from "../../prisma";

interface PatientRequest {
    name: string;
    birth: string;
    phone:string;
    cpf: string;
    rg: string;
    email: string;
    adress: string;
    numberAdress: string;
    district: string;
    complement: string;
    zipcode: string;
    city: string;
    uf: string;
    //user_id: string;
}

class InsertPatient {
    async execute({ name, birth, phone, cpf, rg, email, adress, numberAdress, district, 
        complement, zipcode, city, uf/* , user_id  */}: PatientRequest) {

            const patient = await prismaClient.patient.create({
                data:{
                    name: name,  
                    birth: birth, 
                    phone: phone, 
                    cpf: cpf, 
                    rg: rg, 
                    email: email, 
                    adress: adress, 
                    numberAdress: numberAdress, 
                    district: district, 
                    complement: complement, 
                    zipcode: zipcode, 
                    city: city, 
                    uf: uf, 
                    //user_id:user_id
                }
            })
            return patient;
    }
}

export { InsertPatient }