import { Router } from "express";

import { CreateUserController } from "../controllers/User/CreateUserController";
import { AuthUserController } from "../controllers/User/AuthUserController";

const userRoutes = Router();

const createUserController = new CreateUserController();
const authUserController = new AuthUserController();

userRoutes.post('/' , createUserController.handle);
userRoutes.post('/session' , authUserController.handle);

export {userRoutes}