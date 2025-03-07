import express , {Request , Response , NextFunction} from 'express';
import 'express-async-errors';
import cors from 'cors'

import dotenv from 'dotenv';
dotenv.config();

import {router} from './routes/routes'

const app = express();

app.use(express.json());
app.use(cors());

app.use(router)

app.use((error:Error , req:Request , res:Response , next:NextFunction) => {
    if(error instanceof Error){
        return res.status(400).json({
            error: error.message
        })
    }

    return res.status(500).json({
        status: 'error',
        message: 'Internal server error.'
    })
})


app.listen(process.env.PORT , () => console.log(`Server running on port ${process.env.PORT}`))