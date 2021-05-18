import { Cell2D } from "./Cell2D";

export class Array2D<T> {
  content: Array<Array<Cell2D<T>>>;

  constructor(rows: number, columns: number) {
    this.content = this.setupCells(rows, columns);
  }

  private setupCells(rows: number, columns: number) {
    // Empty array will store the row
    const content: Array<Array<Cell2D<T>>> = [];

    for (let r = 0; r < rows; r++) {
      // Empty array will store the cells
      const row: Array<Cell2D<T>> = [];

      // Pushing the cells to row
      for (let c = 0; c < columns; c++) {
        row.push(new Cell2D(this));
      }

      // Pushing the row to content
      content.push(row);
    }

    return content;
  }
}
