import { Order } from './Order';
import { OrderItem } from './OrderItem';

describe('Order', () => {
  it('should create a new Order', () => {
    const orderItem = new OrderItem({ name: 'Chicken Burrito', size: 'regular', price: 3 }, 2);
    const order = new Order([orderItem], 6);

    expect(order.items.length).toBe(1);
    expect(order.totalCost).toBe(6);
  });

  it('should calculate total cost correctly', () => {
    const orderItem1 = new OrderItem({ name: 'Chicken Burrito', size: 'regular', price: 3 }, 2);
    const orderItem2 = new OrderItem({ name: 'Beef Burrito', size: 'XL', price: 5 }, 3);
    const order = new Order([orderItem1, orderItem2], 0);
    order.calculateTotalCost();

    expect(order.totalCost).toBe(21);
  });
});
