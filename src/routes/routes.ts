import {Router} from 'express';

import {userRoutes} from './user.routes';
import { hairCutsRoutes } from './haircuts.routes';
import { scheduleRoutes } from './schedule.routes';

const router = Router();

router.use("/user" , userRoutes);
router.use("/haircuts" , hairCutsRoutes);
router.use('/schedule' , scheduleRoutes)
export {router}