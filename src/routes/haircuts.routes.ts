import { Router } from "express";

import { CreateHairCutController } from "../controllers/haircuts/CreateHairCutController";

import{isAuthenticated} from '../middlewares/isAuthenticated';

const hairCutsRoutes = Router();

const createHairCutController = new CreateHairCutController();


hairCutsRoutes.post("/createNew" , isAuthenticated , createHairCutController.handle);

export {hairCutsRoutes}