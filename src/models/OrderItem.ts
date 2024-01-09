import { Burrito } from "./Burrito";

export class OrderItem {
    constructor(
        public burrito: Burrito,
        public quantity: number
    ) {}
}
