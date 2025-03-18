import { Router } from "express";

import { NewScheduleController } from "../controllers/schedule/NewScheduleController";
import { ListScheduleController } from "../controllers/schedule/ListScheduleController";
import { DeleteScheduleController } from "../controllers/schedule/DeleteScheduleController";

import{isAuthenticated} from '../middlewares/isAuthenticated';

const scheduleRoutes = Router();

const newScheduleController = new NewScheduleController();
const listScheduleController = new ListScheduleController();
const deleteScheduleController = new DeleteScheduleController();

scheduleRoutes.post('/new' , isAuthenticated , newScheduleController.handle);
scheduleRoutes.get('/list' , isAuthenticated , listScheduleController.handle);
scheduleRoutes.delete('/delete' , isAuthenticated , deleteScheduleController.handle);

export {scheduleRoutes}