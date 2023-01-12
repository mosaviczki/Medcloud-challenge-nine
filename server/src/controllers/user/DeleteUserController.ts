import { Request, Response } from "express";
import { DeleteUser } from "../../services/users/DeleteUser";



class DeleteUserController{
    async handle(req: Request, res: Response){
        const user_id =  req.query.user_id as string;

        const deleteUser = new DeleteUser();
        console.log(user_id)
        const deluser = await deleteUser.execute({
            user_id
        });
        
        return res.json("Usuario deletado!");
    }
}
export {DeleteUserController}