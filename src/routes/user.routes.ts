import { Router } from "express";

import { CreateUserController } from "../controllers/User/CreateUserController";
import { AuthUserController } from "../controllers/User/AuthUserController";
import { DetailsUserController } from "../controllers/User/DetailsUserController";

import{isAuthenticated} from '../middlewares/isAuthenticated';

const userRoutes = Router();


const createUserController = new CreateUserController();
const authUserController = new AuthUserController();
const detailsUserController = new DetailsUserController();

userRoutes.post('/' , createUserController.handle);
userRoutes.post('/session' , authUserController.handle);
userRoutes.get('/detail' ,isAuthenticated, detailsUserController.handle);

export {userRoutes}