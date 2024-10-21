function findShort(s) {
  // returns the length of the shortest word
  // 'My name is deejarh' -> 2
  s = s.split(" ");
  let res = s.map((val, i) => val.length);
  let min = Math.min(...res);
  return min;
}

console.log(findShort("bitcoin take over the world maybe who knows perhaps"));
