(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (global = global || self, factory(global.array2D = {}));
}(this, (function (exports) {
  var Cell2D = function Cell2D(grid, content) {
    if (content === void 0) {
      content = null;
    }

    this.array2D = grid;
    this.content = content;
  };

  var Array2D = /*#__PURE__*/function () {
    function Array2D(rows, columns) {
      this.content = this.setupCells(rows, columns);
    }

    var _proto = Array2D.prototype;

    _proto.setupCells = function setupCells(rows, columns) {
      // Empty array will store the row
      var content = [];

      for (var r = 0; r < rows; r++) {
        // Empty array will store the cells
        var row = []; // Pushing the cells to row

        for (var c = 0; c < columns; c++) {
          row.push(new Cell2D(this));
        } // Pushing the row to content


        content.push(row);
      }

      return content;
    };

    return Array2D;
  }();

  exports.Array2D = Array2D;
  exports.Cell2D = Cell2D;

})));
//# sourceMappingURL=index.umd.js.map
