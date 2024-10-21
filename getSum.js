function getSum(a, b) {
  //first sort
  // list the numbers betwn and sum them
  //sum the array
  if (a === b) {
    return a;
  } else {
    const step = a > b ? -1 : 1;
    let res = 0;
    for (let i = a; i !== b + step; i += step) {
      res += i;
      console.log(res);
    }
    return res;
  }
}

console.log(getSum(5, 2));

console.log(getSum(2, 5));
console.log(getSum(2, -1));
console.log(getSum(2, 2));
