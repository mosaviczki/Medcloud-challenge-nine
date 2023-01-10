import { Request, Response } from "express";
import { CreateUser } from "../../services/users/CreateUser";

class CreateUserController{
    async handle(req: Request, res: Response){
        const { name, phone, email, password, confPassword} = req.body;

        const createUser = new CreateUser();

        const user = await createUser.execute({
            name, 
            phone,
            email,
            password,
            confPassword
        });
        return res.json(user)
    }
}
export {CreateUserController}