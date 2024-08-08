import express, { Router, RequestHandler } from 'express';
import controller from '../controllers/RegisterController';
import { check } from 'express-validator';

const router: Router = express.Router();
const urlencodedParser: RequestHandler = express.urlencoded({ extended: false });

router.get('/', controller.get);
router.post('/', urlencodedParser, [
    check('full-name', 'Full Name cannot be empty and cannot contain numbers')
        .notEmpty().bail()
        .custom((value: string) => {
            if (/\d/.test(value))
                return false;
            return true;
        }),
    check('email', 'Email is not valid')
        .isEmail().bail()
        .normalizeEmail().bail()
        .matches(/^[a-zA-Z0-9._%+-]+@gmail\.com$/),
    check('password', 'The password must be between 8 and 64 characters, contain at least one number, one uppercase character and one lowercase character')
        .isLength({ min: 8, max: 64 }).bail()
        .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/),
    check('password1', 'Two passwords are not equal')
        .custom((value: string, { req }) => {
            return value === req.body.password;
        }),
    check('birthdate', 'Invalid Birthdate')
        .isDate()
], controller.post);

export default router;