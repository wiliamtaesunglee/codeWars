function nearestSq(n) {
  // your code

  for (i = 0; i <= n; i++) {
    let squareN = n + i;
    let squareNValid = Number.isInteger(squareN ** (1 / 2));
    let squareNSub = n - i;
    let squareNSuvValid = Number.isInteger(squareNSub ** (1 / 2));
    if (squareNValid) {
      i = n;
      return squareN;
    }
    if (squareNSuvValid) {
      i = n;
      return squareNSub;
    }
  }
}

// Test.describe("Basic tests",() => {
nearestSq(1);
// ,1)
nearestSq(2);
// ,1)
nearestSq(10);
// ,9)
nearestSq(111);
// ,121)
nearestSq(9999);
// ,10000)

//   });
