import { Router } from "express";

import { CreateHairCutController } from "../controllers/haircuts/CreateHairCutController";
import { ListHairCutController } from "../controllers/haircuts/ListHairCutController";
import { EditHaircutController } from "../controllers/haircuts/EditHaircutController";
import { CheckSubscriptionsController } from "../controllers/haircuts/checkSubscriptionsController";

import{isAuthenticated} from '../middlewares/isAuthenticated';

const hairCutsRoutes = Router();

const createHairCutController = new CreateHairCutController();
const listHairCutController = new ListHairCutController();
const editHaircutController = new EditHaircutController();
const checkSubscriptionsController = new CheckSubscriptionsController();

hairCutsRoutes.post("/createNew" , isAuthenticated , createHairCutController.handle);
hairCutsRoutes.get("/list" , isAuthenticated , listHairCutController.handle);
hairCutsRoutes.put("/edit" , isAuthenticated , editHaircutController.handle);
hairCutsRoutes.get("/check" , isAuthenticated , checkSubscriptionsController.handle);

export {hairCutsRoutes}