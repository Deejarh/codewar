function toCamelCase(str) {
  // the-stealth_warrior => theStealthWarrior
  const joinStr = str.replace(/[-_]/g, " ").split(" ");
  let res;
  const firstStr = joinStr.shift();

  console.log(joinStr);
  res = joinStr.map((val) => val.charAt(0).toUpperCase() + val.slice(1));
  res.unshift(firstStr);
  res = res.join("");

  console.log(res);
  return res;
}

console.log(toCamelCase("the-stealth_warrior"));
