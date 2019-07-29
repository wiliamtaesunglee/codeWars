const closestMultiple10 = num => {
  let numRound = Math.round(num);
  let numString = numRound.toString();
  let lastNumChar = numString[numString.length - 1];
  return lastNumChar >= 5
    ? (numRound += 10 - lastNumChar)
    : (numRound -= lastNumChar);
};

closestMultiple10(54);

closestMultiple10(55);
