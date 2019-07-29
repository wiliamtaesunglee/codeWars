function strong(n) {
  let arrFat = [];
  let arrN = n.toString().split("");

  let fatorial = a => {
    for (ii = a - 1; ii >= 1; ii--) {
      a *= ii;
      if (ii === 1) {
        return a;
      }
    }
  };

  let nTest = arrN.forEach(elem => {
    elem == 1 ? arrFat.push(1) : arrFat.push(fatorial(parseInt(elem)));
  });

  let nSum = arrFat.reduce((acc, curr) => acc + curr);
  return nSum === n ? "STRONG!!!!" : "Not Strong !!";
}

// strong(1);
// , "STRONG!!!!");
// });
// it("Testing for 2", () => {
// strong(2);
//   , "STRONG!!!!");
// });
// it("Testing for 145", () => {
strong(145);
//   , "STRONG!!!!");
// });
// it("Testing for 7", () => {
// strong(7);
//   , "Not Strong !!");
// });
// it("Testing for 93", () => {
// strong(93);
//   , "Not Strong !!");
// });
// it("Testing for 185", () => {
// strong(185);
//   , "Not Strong !!")
