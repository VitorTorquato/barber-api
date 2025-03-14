import { Request, Response } from "express";
import { EditHaircutService } from "../../services/haircut/editHaircutService";

class EditHaircutController{
    async handle(req:Request , res: Response){
        const user_id = req.user_id;
        const {name , price , haircut_id , status} = req.body;
    

        const editHaircutService = new EditHaircutService();

        const haircut = await editHaircutService.execute({
            user_id,
            haircut_id,
            name,
            price,
            status
        })

        return res.json(haircut)
    }
}

export {EditHaircutController}