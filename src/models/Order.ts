import { OrderItem } from "./OrderItem";
import { generateUniqueId } from "./index"; 

export class Order {
  public id: string;
  
  constructor(
      public items: OrderItem[],
      public totalCost: number
  ) {
    this.id = generateUniqueId();
  }

  calculateTotalCost(): void {
      this.totalCost = this.items.reduce((total, item) => total + item.burrito.price * item.quantity, 0);
  }
}
