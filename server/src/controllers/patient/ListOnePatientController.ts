import { Request, Response } from "express";
import { ListOnePatient } from "../../services/patient/ListOnePatient";

class ListOnePatientController{
    async handle(req: Request, res: Response){
        const idpatient =  req.query.idpatient as string;

        const listOnePatient = new ListOnePatient();
        console.log("ID: ", idpatient)
        const patient = await listOnePatient.execute({
            idpatient
        });
        

        return res.json(patient);
    }

}
export { ListOnePatientController }