import { Router } from 'express';
import { BurritoController } from '../controllers/BurritoController';

const router = Router();
const controller = new BurritoController();

router.get('/', controller.getAll);

export default router;
