function findOdd(A) {
  let response = 0;
  var count = {};
  A.forEach(s => {
    count[s] ? count[s]++ : (count[s] = 1);
  });

  //   Object.keys(count).map(elem => {
  //     if (count[elem] == 1) {
  //       response = elem;
  //     }
  //     for (i = 1; i < count[elem]; i++) {
  //       count[elem] % i === 0 ? true : (response = elem);
  //     }
  //   });

  Object.keys(count).map(elem => {
    if (count[elem] % 2 !== 0) {
      console.log(elem);
    }
  });
  //   console.log(Number(response))
}

//   function doTest(a, n) {
//     console.log("A = ", a);
//     console.log("n = ", n);
//     Test.assertEquals(findOdd(a), n);
//   }
//   Test.describe('Example tests', function() {
findOdd([20, 1, -1, 2, -2, 3, 3, 5, 5, 1, 2, 4, 20, 4, -1, -2, 5]);
// , 5);
findOdd([1, 1, 2, -2, 5, 2, 4, 4, -1, -2, 5]);
// , -1);
findOdd([20, 1, 1, 2, 2, 3, 3, 5, 5, 4, 20, 4, 5]);
// , 5);
// findOdd([10]);
// , 10);
findOdd([1, 1, 1, 1, 1, 1, 10, 1, 1, 1, 1]);
// , 10);
findOdd([5, 4, 3, 2, 1, 5, 4, 3, 2, 10, 10]);
// , 1);
//   });
