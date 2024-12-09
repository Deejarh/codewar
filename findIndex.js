 function findIndex(array, predicate, fromIndex = 0) {
    if (fromIndex > array.length) {
      return -1
    }
  if ( fromIndex < 0) {
    fromIndex = Math.max(array.length + fromIndex , 0)
  }
  
    for ( let i = fromIndex; i < array.length ; i++) {
      const isValid = predicate(array[i])
      if (isValid) {
        return i
      }
    }
  
    return -1
    
}

console.log(findIndex([5, 12, 8, 130, 44] , (num) => num > 3, -2))

export default function findLastIndex(
    array,
    predicate,
    fromIndex = array.length - 1,
  ) {
    if (fromIndex > array.length) {
        return array.length - 1
      }
    if ( fromIndex < 0) {
      fromIndex = Math.max(array.length + fromIndex , 0)
    }
  
    for ( let i = fromIndex; i >= 0 ; i--) {
        const isValid = predicate(array[i])
        console.log(isValid)
        if (isValid) {
            return i
        }
      }
      return -1
  }
  const arr = [5, 4, 3, 2, 1]
console.log( findLastIndex(arr, (num) => num > 3)) // => 1

  console.log(findLastIndex(arr, (num) => num > 1, 3)); // => 3

  console.log(findLastIndex(arr, (num) => num < 1, 2))