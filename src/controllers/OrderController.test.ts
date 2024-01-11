import { OrderController } from './OrderController';
import { Request, Response } from 'express';

describe('OrderController', () => {
  let controller: OrderController;

  beforeEach(() => {
    controller = new OrderController();
  });

  it('should return an empty list of orders initially', () => {
    const req = {} as Request;
    const res = {
      json: jest.fn(),
    } as unknown as Response;

    controller.getAll(req, res);

    expect(res.json).toHaveBeenCalledWith([]);
  });

  it('should create a new order', () => {
    const req = {
      body: {
        items: [
          { burrito: { name: 'Chicken Burrito', size: 'regular', price: 3 }, quantity: 2 },
        ],
      },
    } as Request;
    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    } as unknown as Response;

    controller.createOrder(req, res);

    expect(res.status).toHaveBeenCalledWith(201);
    expect(res.json).toHaveBeenCalled();
  });

  it('should return an order by ID', () => {
    // Add test logic for getting an order by ID
  });
});
