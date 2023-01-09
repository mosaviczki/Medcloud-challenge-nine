import express, { Request, Response, NextFunction } from 'express';
import 'express-async-errors';
import { router } from './routes';
import cors from 'cors';

const app = express();
app.use(express.json());
app.use(cors());

app.use(router);

//Error Handling
app.use((err: Error, req: Request, res:Response, next: NextFunction) => {
    if (err instanceof Error){
        //Se for uma instância do tipo error - bad request
        return res.status(400).json({
            error: err.message
        })
    }
    return res.status(500).json({
        status: 'error',
        message: 'Internal server error.'
    })
})

//Running server
app.listen(3001, () =>{
    console.log("Rodando servidor");
});