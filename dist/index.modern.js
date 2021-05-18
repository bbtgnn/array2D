class Cell2D {
  constructor(grid, content = null) {
    this.array2D = grid;
    this.content = content;
  }

}

class Array2D {
  constructor(rows, columns) {
    this.content = this.setupCells(rows, columns);
  }

  setupCells(rows, columns) {
    // Empty array will store the row
    const content = [];

    for (let r = 0; r < rows; r++) {
      // Empty array will store the cells
      const row = []; // Pushing the cells to row

      for (let c = 0; c < columns; c++) {
        row.push(new Cell2D(this));
      } // Pushing the row to content


      content.push(row);
    }

    return content;
  }

}

export { Array2D, Cell2D };
//# sourceMappingURL=index.modern.js.map
