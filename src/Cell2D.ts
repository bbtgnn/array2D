import { Array2D } from "./Array2D";

export class Cell2D<T> {
  private readonly array2D: Array2D<T>;
  content: T;

  constructor(grid: Array2D<T>, content: T = null) {
    this.array2D = grid;
    this.content = content;
  }
}
