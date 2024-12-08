// [1, 2, 3, 4].square(); // [1, 4, 9, 16]

Array.prototype.square = function () {
    const result = this.map((val) => val * val)
  return result
  };

  console.log([1, 2, 3, 4].square())
  console.log([].square())