import { Request, Response } from 'express';
import { validationResult, Result } from 'express-validator';

export default {
    get: (req: Request, res: Response): void => {
        res.render('register');
    },
    post: (req: Request, res: Response): void => {
        const errors: Result = validationResult(req);
        if (!errors.isEmpty()) {
            const alert: Result[] = errors.array();
            res.status(400).render('register', { alert });
        } else {
            res.render('success');
        }
    }
}