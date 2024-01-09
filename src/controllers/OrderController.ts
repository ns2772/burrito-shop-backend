import { Request, Response } from 'express';
import { Order } from '../models/Order';
import { OrderItem } from '../models/OrderItem';

export class OrderController {
    private orders: Order[] = [];

    public getAll = (req: Request, res: Response): void => {
        res.json(this.orders);
    }

    public createOrder = (req: Request, res: Response): void => {
        const orderItems: OrderItem[] = req.body.items.map((item: any) => new OrderItem(item.burrito, item.quantity));
        const newOrder = new Order(orderItems, 0);
        newOrder.calculateTotalCost();
        this.orders.push(newOrder);
        res.status(201).json(newOrder);
    }

    public getOrderById = (req: Request, res: Response): void => {
        const orderId = req.params.id; // Get the ID from the request parameters
        const order = this.orders.find(o => o.id === orderId); // Compare order ID
    
        if (order) {
            res.json(order);
        } else {
            res.status(404).send('Order not found');
        }
    }
}
