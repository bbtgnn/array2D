import { Array2D } from "./Array2D";
export declare class Cell2D<T> {
    private readonly array2D;
    content: T;
    constructor(grid: Array2D<T>, content?: T);
}
