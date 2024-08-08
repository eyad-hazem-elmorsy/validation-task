import express, { Router } from 'express';
import controller from '../controllers/SuccessController';

const router: Router = express.Router();

router.get('/', controller.get);

export default router;