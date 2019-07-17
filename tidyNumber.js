// function tidyNumber(n) {
//   //your code here
//   let arr = n
//     .toString()
//     .split("")
//     .map(elem => parseInt(elem));
//   let testArr = arr.length;
//   let validTest = [];
//   for (i = 0; i < testArr - 1; i++) {
//     arr[i] <= arr[i + 1] ? validTest.push("true") : false;
//   }

//   if (validTest.length + 1 === testArr) {
//     return true;
//   } else {
//     return false;
//   }
// }

function tidyNumber(n) {
  console.log([...(n += "")].sort().join`` == n);
}

// tidyNumber(12);
//   true;
// tidyNumber(102);
// //  false
// tidyNumber(9672);
// //  false
// tidyNumber(2789);
// //  true
tidyNumber(2335);
// //  true
