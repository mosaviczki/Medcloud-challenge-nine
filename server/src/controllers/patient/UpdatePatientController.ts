import { Request, Response } from "express";
import { UpdatePatient } from "../../services/patient/UpdatePatient";


class UpdatePatientController{
    async handle(req: Request, res: Response){

        const {idpatient,phone,email,adress,numberAdress,district,complement,zipcode,city,uf} = req.body;

        const updatePatient = new UpdatePatient();
        const updPatient = await updatePatient.execute({
            idpatient,
            phone,
            email,
            adress,
            numberAdress,
            district,
            complement,
            zipcode,
            city,
            uf
        });
        
        return res.json("Alterações salvas!");
    }
}

export {UpdatePatientController}