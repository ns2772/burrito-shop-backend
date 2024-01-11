import { Burrito } from './Burrito';

describe('Burrito', () => {
  it('should create a new Burrito', () => {
    const burrito = new Burrito('Chicken Burrito', 'regular', 3);

    expect(burrito.name).toBe('Chicken Burrito');
    expect(burrito.size).toBe('regular');
    expect(burrito.price).toBe(3);
  });
});
