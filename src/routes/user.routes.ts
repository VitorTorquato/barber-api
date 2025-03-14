import { Router } from "express";

import { CreateUserController } from "../controllers/User/CreateUserController";
import { AuthUserController } from "../controllers/User/AuthUserController";
import { DetailsUserController } from "../controllers/User/DetailsUserController";
import { UpdateUserController } from "../controllers/User/updateUserController";

import{isAuthenticated} from '../middlewares/isAuthenticated';

const userRoutes = Router();


const createUserController = new CreateUserController();
const authUserController = new AuthUserController();
const detailsUserController = new DetailsUserController();
const updateUserController = new UpdateUserController()

userRoutes.post('/' , createUserController.handle);
userRoutes.post('/session' , authUserController.handle);
userRoutes.get('/detail' ,isAuthenticated, detailsUserController.handle);
userRoutes.put('/update' ,isAuthenticated, updateUserController.handle);

export {userRoutes}