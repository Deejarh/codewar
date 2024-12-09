 function fill(array, value, start = 0, end = array.length) {
    if (end > array.length) {
        end = array.length
    }
    if (end < 0) {
        end = array.length + end
    }
    if (start < 0) {
        start = array.length + start
        
    }

    for ( let i = start; i < end; i++) {
      array[i] = value
    }
    return array
  }

  //console.log(fill([1], '*', 2, 3))
  //console.log(fill([1, 2, 3], 'a')); // ['a', 'a', 'a']
  //console.log(fill([4, 6, 8, 10], '*', 1, 3))
  console.log(fill([4, 6, 8, 10, 12], '*', -3, -1))