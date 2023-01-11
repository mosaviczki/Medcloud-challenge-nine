import { Request, Response, NextFunction } from "express";
import { InsertPatient } from "../../services/patient/InsertPatient";

class InsertPatientController{
    async handle(req: Request, res: Response, next: NextFunction){
        const{name,image,birth,phone,cpf,rg,email,adress,numberAdress,district,complement,zipcode,city,
            uf, user_id} = req.body;

        const insertPatient = new InsertPatient();

        if(!req.file){
            throw new Error("Error upload file")
        }else{
            const { originalname, filename: image } = req.file;

            const patient = await insertPatient.execute({
                name,
                image,
                birth,
                phone,
                cpf,
                rg,
                email,
                adress,
                numberAdress,
                district,
                complement,
                zipcode,
                city,
                uf,
                user_id
            });

            return res.json(patient)
        }
        
    }
}

export {InsertPatientController}