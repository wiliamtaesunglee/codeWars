function tidyNumber(n) {
  //your code here
  let arr = n
    .toString()
    .split("")
    .map(elem => parseInt(elem));
  let testArr = arr.length;
  let validTest = [];
  for (i = 0; i < testArr - 1; i++) {
    arr[i] <= arr[i + 1] ? validTest.push("true") : false;
  }

  if (validTest.length + 1 === testArr) {
    console.log(true);
  } else {
    console.log(false);
  }
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
