import { Request, Response } from 'express';

export default {
    get: (req: Request, res: Response): void => {
        res.render('success');
    }
}