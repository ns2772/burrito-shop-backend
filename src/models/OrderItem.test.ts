import { OrderItem } from './OrderItem';
import { Burrito } from './Burrito';

describe('OrderItem', () => {
  it('should create a new OrderItem', () => {
    const burrito = new Burrito('Chicken Burrito', 'regular', 3);
    const orderItem = new OrderItem(burrito, 2);

    expect(orderItem.burrito).toEqual(burrito);
    expect(orderItem.quantity).toBe(2);
  });
});
