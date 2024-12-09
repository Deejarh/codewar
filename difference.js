 function difference(array, values) {
    let result;
 result = array.filter((val) => !values.includes(val))
 return result
   }
console.log(difference([1, 2, 3], [2, 3, 3, 2]))
  console.log(difference([1, 2, 3, 4], [2, 3, 1]))
  console.log(difference([1, 2, 3, 4], []))
  console.log(difference([1, NaN, 2], [NaN, 3, 4]))