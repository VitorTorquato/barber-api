import {Router} from 'express';

import {userRoutes} from './user.routes';
import { hairCutsRoutes } from './haircuts.routes';

const router = Router();

router.use("/user" , userRoutes);
router.use("/haircuts" , hairCutsRoutes);

export {router}