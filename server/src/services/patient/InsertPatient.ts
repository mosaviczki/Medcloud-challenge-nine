import prismaClient from "../../prisma";

interface PatientRequest {
    name: string;
    image: string;
    birth: string;
    phone: number;
    cpf: number;
    rg: number;
    email: string;
    adress: string;
    numberAdress: number;
    district: string;
    complement: string;
    zipcode: number;
    city: string;
    uf: string;
    user_id: string;
}

class InsertPatient {
    async execute({ name, image, birth, phone, cpf, rg, email, adress, numberAdress, district, 
        complement, zipcode, city, uf, user_id }: PatientRequest) {

            const patient = await prismaClient.patient.create({
                data:{
                    name: name, 
                    image: image, 
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
                    user_id:user_id
                }
            })
            return patient;
    }
}

export { InsertPatient }