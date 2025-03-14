import { Request , Response } from "express";
import { ListHaircutService } from "../../services/haircut/listHaircutService";

class ListHairCutController{

    async handle(req:Request , res:Response){
        const user_id = req.user_id;
        const status = req.query.status as string;

        const listHaircuts = new ListHaircutService();

        const haircut = await listHaircuts.execute({
            user_id,
            status
        })
        
        return res.json(haircut)
        
    }
}

export {ListHairCutController}