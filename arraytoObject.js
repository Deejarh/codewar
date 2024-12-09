export default function fromPairs(pairs) {
    let result = {}
   for ( const [key, val] of pairs) {
    result[key] = val
   }
   return result
  }
  const pairs = [
    ['a', 1],
    ['b', 2],
    ['c', 3],
  ];

  console.log(fromPairs(pairs))