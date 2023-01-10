import {Router, Request, Response } from 'express'


const router = Router();

router.get('/teste', (req: Request, res: Response)=>{
    return ("Monique");
    //throw new Error('Erro ao fazer essa requisicao')
});

export { router }