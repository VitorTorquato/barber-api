import { Request, Response } from "express"
import { ListScheduleServices } from "../../services/schedule/ListScheduleServices"
class ListScheduleController{
    async handle(req:Request , res: Response){
        const user_id = req.user_id;

        const listScheduleServices = new ListScheduleServices();
        const schedulList = await listScheduleServices.execute({
            user_id
        })
        
        return res.json(schedulList);
    }
}

export {ListScheduleController}