// function partsSums(ls) {
//   let newArr = [...ls, 0];
//   let arraySum = [];

//   for (var i = 0; i < newArr.length; i++) {
//     arraySum.push(
//       newArr
//         .slice(i, newArr.length)
//         .reduce((accumulator, current) => accumulator + current)
//     );
//   }
//   console.log(arraySum);
// }

function partsSums(ls) {
  let sum = ls.reduce((acc, curr) => acc + curr, 0);
  let newSum = sum;
  let arrSum = [sum];
  ls.map(elem => arrSum.push((newSum -= elem)));
  console.log(arrSum);
}

// it("Basic tests",function() {
//     dotest([], [0]);
//     dotest([0, 1, 3, 6, 10], [20, 20, 19, 16, 10, 0]);
//     dotest([1, 2, 3, 4, 5, 6], [21, 20, 18, 15, 11, 6, 0]);
//     dotest([744125, 935, 407, 454, 430, 90, 144, 6710213, 889, 810, 2579358],
//             [10037855, 9293730, 9292795, 9292388, 9291934, 9291504, 9291414, 9291270, 2581057, 2580168, 2579358, 0]);

partsSums([]);
partsSums([0, 1, 3, 6, 10]);
partsSums([1, 2, 3, 4, 5, 6]);
partsSums([744125, 935, 407, 454, 430, 90, 144, 6710213, 889, 810, 2579358]);
