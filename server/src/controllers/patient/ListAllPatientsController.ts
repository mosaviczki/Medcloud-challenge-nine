import { Request, Response } from "express";
import { ListAllPatients } from "../../services/patient/ListAllPatients";

class ListAllPatientsController{
    async handle(req: Request, res: Response){
        //const userid =  req.query.iduser as string;

        const listAllPatients = new ListAllPatients();

        const patient = await listAllPatients.execute();

        return res.json(patient);
    }
}
export {ListAllPatientsController}