

class Matrix {
  constructor(rows, cols) {
    this.rows = rows;
    this.cols = cols;
    this.value = [];

    for (let i = 0; i < this.rows; ++i) {
      this.value[i] = [];
      for (let j = 0; j < this.cols; ++j) {
        this.value[i][j] = 0;
      }
    }
  }


  add(n) {
    if (n instanceof Matrix) {
      //if n is a matrix and is not of the same size of this it will stop
      if (this.cols !== n.cols && this.rows !== n.rows) {
        console.log("Not the same size");
        return undefined;
      }
      //otherwise it will add every cell
      for (let i = 0; i < this.rows; ++i) {
        for (let j = 0; j < this.cols; ++j) {
          this.value[i][j] += n.value[i][j];
        }
      }
      
    } else {
      //in the case n is not a matrix ad dn to every cell
      for (let i = 0; i < this.rows; ++i) {
        for (let j = 0; j < this.cols; ++j) {
          this.value[i][j] += n;
        }
      }
    }
  }
 
}
//it goes always at the bottom;
module.exports = Matrix;
