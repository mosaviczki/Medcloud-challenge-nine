import express, { Request, Response, NextFunction } from 'express';
import 'express-async-errors';
import { router } from './routes';
import cors from 'cors';
import mysql from 'mysql';
import path from 'path'

const app = express();
app.use(express.json());
app.use(cors());

/* const db = mysql.createPool({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "",
    database: "crudmedcloud"
}); */

app.use(router);

app.use(
    '/files', 
    express.static(path.resolve(__dirname, '..', 'img'))
)

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
declare global {
    interface BigInt {
      toJSON(): string;
    }
  }
  
  BigInt.prototype.toJSON = function (): string {
    return this.toString();
};
//Running server
app.listen(3001, () =>{
    console.log("Rodando servidor");
});

