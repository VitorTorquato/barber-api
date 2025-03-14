import { Request, Response } from "express"
import { createHaircutService } from "../../services/haircut/createHaircutService"

class CreateHairCutController{
    async handle(req:Request , res:Response){ 
        const {name, price} = req.body;
        const user_id = req.user_id;

        const creaHaircutService = new createHaircutService();

        const haircut = await creaHaircutService.execute({
            name,
            price,
            user_id
        })

        return res.json(haircut)
 
    }
}

export {CreateHairCutController}