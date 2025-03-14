import { Router } from "express";

import { CreateHairCutController } from "../controllers/haircuts/CreateHairCutController";
import { ListHairCutController } from "../controllers/haircuts/ListHairCutController";
import { EditHaircutController } from "../controllers/haircuts/EditHaircutController";

import{isAuthenticated} from '../middlewares/isAuthenticated';

const hairCutsRoutes = Router();

const createHairCutController = new CreateHairCutController();
const listHairCutController = new ListHairCutController();
const editHaircutController = new EditHaircutController();

hairCutsRoutes.post("/createNew" , isAuthenticated , createHairCutController.handle);
hairCutsRoutes.get("/list" , isAuthenticated , listHairCutController.handle);
hairCutsRoutes.put("/edit" , isAuthenticated , editHaircutController.handle);

export {hairCutsRoutes}