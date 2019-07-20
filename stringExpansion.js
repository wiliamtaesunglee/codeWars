"use strict";

function stringExpansion(s) {
  // Good luck!
  let arrayS = [];
  let counterS = 1;
  let newS = s.split("").map(s => {
    Number(s) === parseInt(s)
      ? (counterS = Number(s))
      : arrayS.push(s.repeat(counterS));
  });

  return arrayS.join("");
}

stringExpansion("3abc");
//   'aaabbbccc'
stringExpansion("3D2a5d2f");
//   'DDDaadddddff');
stringExpansion("0d0a0v0t0y");
//   '');
stringExpansion("3d332f2a");
//   'dddffaa');
stringExpansion("abcde");
//   'abcde');
stringExpansion("a2bcde");
//   'abbccddee');
