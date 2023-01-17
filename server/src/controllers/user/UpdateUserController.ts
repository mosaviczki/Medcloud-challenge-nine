import { Request, Response } from "express";
import { UpdateUser } from "../../services/users/UpdateUser";


class UpdateUserController{
    async handle(req: Request, res: Response){

        const { user_id, phone, email, password, confPassword} = req.body;

        const updateUser = new UpdateUser();
        const upduser = await updateUser.execute({
            user_id,
            phone,
            email,
            password,
            confPassword
        });
        
        return res.json("Alterações salvas!");
    }
}

export {UpdateUserController}