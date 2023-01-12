import { Request, Response } from "express";
import { DeletePatient } from "../../services/patient/DeletePatient";

class DeletePatientController{
    async handle(req: Request, res: Response){
        const idpatient =  req.query.idpatient as string;

        const deletePatient = new DeletePatient();

        const delpatient = await deletePatient.execute({
            idpatient
        });
        
        return res.json("Paciente deletado!");
    }
}
export {DeletePatientController}