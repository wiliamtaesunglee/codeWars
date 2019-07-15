function sumDigits(number) {
  let reducer = (acc, curr) => acc + curr;

  const calc = Math.abs(number)
    .toString()
    .split("")
    .map(num => parseInt(num))
    .reduce(reducer);

  return calc;
}

console.log(sumDigits(-32));
