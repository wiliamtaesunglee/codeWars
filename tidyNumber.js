function tidyNumber(n) {
  //your code here
  let arr = n
    .toString()
    .split("")
    .map(elem => parseInt(elem));
  let testArr = arr.length;

  let i = 0;
  while (i < testArr) {
    let teste = arr[i] < arr[i + 1] ? true : false;
    console.log(teste);
    if (i > testArr);
    {
      break;
    }
  }
  i++;
}

// tidyNumber(12);
//   true
// tidyNumber(102);
// //  false
// tidyNumber(9672);
// //  false
// tidyNumber(2789);
// //  true
tidyNumber(2335);
// //  true
