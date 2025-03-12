import { Request , Response } from "express"
import { DetailsUserService } from "../../services/users/DetailsUserService"

class DetailsUserController{
    async handle(req:Request , res : Response){
            const user_id = req.user_id;

            const detailUserService = new DetailsUserService();
            
            const detailUser = await detailUserService.execute(user_id);
            
            return res.json(detailUser)
    }
}

export {DetailsUserController}