import { Cell2D } from "./Cell2D";
export declare class Array2D<T> {
    content: Array<Array<Cell2D<T>>>;
    constructor(rows: number, columns: number);
    private setupCells;
}
