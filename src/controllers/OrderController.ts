import { Request, Response } from 'express';
import { Order } from '../models/Order';

export class OrderController {
    private orders: Order[] = [];

    public getAll(req: Request, res: Response): void {
        res.json(this.orders);
    }

    public createOrder(req: Request, res: Response): void {
        const order = new Order(req.body.items, 0);
        order.calculateTotalCost();
        this.orders.push(order);
        res.status(201).json(order);
    }

    public getOrderById(req: Request, res: Response): void {
      const orderId = req.params.id; // Get the ID from the request parameters
      const order = this.orders.find(o => o.id === orderId); // Compare order ID
  
      if (order) {
          res.json(order);
      } else {
          res.status(404).send('Order not found');
      }
  }
}
