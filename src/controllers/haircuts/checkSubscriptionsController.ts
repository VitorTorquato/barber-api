import { Request, Response } from "express";
import { CheckSubscriptionServices } from "../../services/haircut/CheckSubscriptionServices";

class CheckSubscriptionsController{
    async handle(req:Request , res: Response){
        const user_id  = req.user_id;

        const checkSubscriptionServices = new CheckSubscriptionServices();

        const status = await checkSubscriptionServices.execute({
                user_id
        })


        return res.json(status);
    }
}

export {CheckSubscriptionsController}