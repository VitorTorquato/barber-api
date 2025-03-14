import { Request, Response } from "express";
import { UpdateUserService } from "../../services/users/updateUserService";

class UpdateUserController{
    async handle(req:Request, res:Response){

        const {name , adress} = req.body;
        const user_id = req.user_id;

        const updateUserService = new UpdateUserService();

        const user = await updateUserService.execute({
            user_id,
            name,
            adress
        })

        return res.json(user);
    }   
}

export {UpdateUserController}