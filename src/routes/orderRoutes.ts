import { Router } from 'express';
import { OrderController } from '../controllers/OrderController';

const router = Router();
const controller = new OrderController();

router.get('/', controller.getAll);
router.post('/', controller.createOrder);
router.get('/:id', controller.getOrderById);

export default router;
