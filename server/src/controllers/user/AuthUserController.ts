import { Request, Response } from "express";
import { AuthUser } from "../../services/users/AuthUser";

class AuthUserController{
    async handle(req: Request, res: Response){
        const {email, password} = req.body;

        const authUser = new AuthUser();

        const auth = await authUser.execute({
            email,
            password
        })
        return res.json(auth)
    }
}
export {AuthUserController}