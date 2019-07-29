function isNice(arr) {
  let arrSort = arr.sort((a, b) => a - b);
  arrSort.map((value, index) => {
    console.log(value, index, arrSort[index + 1]);
  });
  console.log(arrSort);
}

isNice([2, 10, 9, 3]);
// ,true);
// isNice([3, 4, 5, 7]);
// ,false);
//     });
//   });
