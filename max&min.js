function highAndLow(numbers) {
  let arrayNumber = numbers.split(" ");
  let arrayNumberToNumber = arrayNumber.map(elem => parseInt(elem));
  let min = Math.min(...arrayNumberToNumber).toString();
  let max = Math.max(...arrayNumberToNumber).toString();
  return `${max} ${min}`;
}

highAndLow("4 5 29 54 4 0 -214 542 -64 1 -3 6 -6");
