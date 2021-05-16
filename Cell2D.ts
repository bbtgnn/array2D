import Array2D from "./Grid2D";

export default class Cell2D<T> {
  private readonly grid: Array2D<T>;
  content: T;

  constructor(grid: Array2D<T>, content: T = null) {
    this.grid = grid;
    this.content = content;
  }
}
