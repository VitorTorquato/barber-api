import { Request, Response } from "express";
import { DeleteScheduleService } from "../../services/schedule/DeleteScheduleService";

class DeleteScheduleController{
    async handle(req:Request, res: Response){
            const user_id = req.user_id;
            const service_id = req.query.service_id as string;

            const deleteScheduleService = new DeleteScheduleService();
            const deleteSchedule = await deleteScheduleService.execute({
                service_id,
                user_id
            })

            return res.json(deleteSchedule);
    }
}

export {DeleteScheduleController}