// function isNice(arr) {
//   let arrSort = arr
//     .sort((a, b) => a - b)
//     .filter((val, ind, self) => self.indexOf(val) === ind);
//   console.log(arrSort);
//   let arrOdd = arrSort.length % 2 !== 0 ? true : false;
//   let validation = true;
//   let response = true;
//   if (arrOdd === false) {
//     while (validation && response) {
//       let arrAnalyse = arrSort[0] + 1 === arrSort[1];
//       !arrAnalyse ? (response = false) : arrSort.splice(0, 2);
//       if (arrSort.length === 0) validation = false;
//     }
//   } else {
//     while (validation && response) {
//       if (arrSort.length === 3) {
//         let arrAnalyseOdd =
//           arrSort[0] + 1 === arrSort[1] && arrSort[1] === arrSort[2] - 1;
//         !arrAnalyseOdd ? (response = false) : arrSort.splice(0, 3);
//         if (arrSort.length === 0) validation = false;
//       } else {
//         let arrAnalyseOddfirst = arrSort[0] + 1 === arrSort[1];
//         !arrAnalyseOddfirst ? (response = false) : arrSort.splice(0, 2);
//         if (arrSort.length === 0) validation = false;
//       }
//     }
//   }
//   return response;
// }

// function isNice(arr) {
//   var counter = 0;
//   for (var i = 0; i < arr.length; i++) {
//     if (arr.includes(arr[i] - 1) || arr.includes(arr[i] + 1)) counter++;
//   }
//   if (counter == arr.length && arr.length != 0) return true;
//   return false;
// }

// function isNice(arr) {
//   console.log(
//     !!arr.length && arr.every(x => arr.some(y => y === x - 1 || y === x + 1))
//   );
// }

// isNice([2, 10, 9, 3, 3]);
// ,true);
// isNice([3, 4, 5, 7]);
// ,false);
//     });
//   });
