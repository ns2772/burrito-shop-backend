import { BurritoController } from './BurritoController';
import { Request, Response } from 'express';

describe('BurritoController', () => {
  let controller: BurritoController;

  beforeEach(() => {
    controller = new BurritoController();
  });

  it('should return all burritos', () => {
    const req = {} as Request;
    const res = {
      json: jest.fn(),
    } as unknown as Response;

    controller.getAll(req, res);

    expect(res.json).toHaveBeenCalledWith([
      {
        name: 'Chicken Burrito',
        size: 'regular',
        price: 3,
      },
      {
        name: 'Chicken Burrito',
        size: 'XL',
        price: 5,
      },
    ]);
  });
});
