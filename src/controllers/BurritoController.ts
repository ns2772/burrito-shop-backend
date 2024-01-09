import { Request, Response } from 'express';
import { Burrito } from '../models/Burrito';

export class BurritoController {
    private burritos: Burrito[] = [
        new Burrito("Chicken Burrito", "regular", 3),
        new Burrito("Chicken Burrito", "XL", 5)
    ];

    public getAll = (req: Request, res: Response): void => {
        res.json(this.burritos);
    }
}
