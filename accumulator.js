function accum(str) {
  //'abc' -> a-bb-ccc
  let res = `${str.charAt(0).toUpperCase()}`;
  console.log(res);
  for (let i = 1; i < str.length; i++) {
    let duplicate = str.charAt(i).repeat(i + 1);
    res = `${res}-${duplicate.charAt(0).toUpperCase() + duplicate.slice(1)}`;
  }
  return res;
}

console.log(accum("ZpglnRxqenU"));
