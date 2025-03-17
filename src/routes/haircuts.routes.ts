import { Router } from "express";

import { CreateHairCutController } from "../controllers/haircuts/CreateHairCutController";
import { ListHairCutController } from "../controllers/haircuts/ListHairCutController";
import { EditHaircutController } from "../controllers/haircuts/EditHaircutController";
import { CheckSubscriptionsController } from "../controllers/haircuts/checkSubscriptionsController";
import { CountHaircutController } from "../controllers/haircuts/CountHaircutController";
import { DetailHaircutController } from "../controllers/haircuts/DetailHaircutController";

import{isAuthenticated} from '../middlewares/isAuthenticated';

const hairCutsRoutes = Router();

const createHairCutController = new CreateHairCutController();
const listHairCutController = new ListHairCutController();
const editHaircutController = new EditHaircutController();
const checkSubscriptionsController = new CheckSubscriptionsController();
const countHaircutController = new CountHaircutController();
const detailHaircutController = new DetailHaircutController();

hairCutsRoutes.post("/createNew" , isAuthenticated , createHairCutController.handle);
hairCutsRoutes.get("/list" , isAuthenticated , listHairCutController.handle);
hairCutsRoutes.put("/edit" , isAuthenticated , editHaircutController.handle);
hairCutsRoutes.get("/check" , isAuthenticated , checkSubscriptionsController.handle);
hairCutsRoutes.get("/amount" , isAuthenticated , countHaircutController.handle);
hairCutsRoutes.get("/haircutdetail" , isAuthenticated , detailHaircutController.handle);

export {hairCutsRoutes}