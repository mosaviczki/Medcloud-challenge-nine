import { Request, Response } from "express";
import { DetailUser } from "../../services/users/DetailUser";

class DetailUserController{
    async handle(req: Request, res: Response){

        const user_id = req.user_id;

        const detailUser = new DetailUser();

        const user = await detailUser.execute(user_id);

        return res.json(user);
    }
}
export {DetailUserController}