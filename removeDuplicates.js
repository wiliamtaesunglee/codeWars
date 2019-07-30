function solve(arr) {
  //   let newArr = new Set(arr.reverse());
  //   let newArrReverse = [...newArr];
  //   console.log(newArrReverse.reverse());

  let newArr = arr
    .reverse()
    .filter((val, ind, self) => self.indexOf(val) === ind);
  console.log(newArr.reverse());
}

// describe("Basic tests", function(){
solve([3, 4, 4, 3, 6, 3]);
// ,[4,6,3]);
solve([1, 2, 1, 2, 1, 2, 3]);
// ,[1,2,3]);
solve([1, 2, 3, 4]);
// ,[1,2,3,4]);
solve([1, 1, 4, 5, 1, 2, 1]);
// ,[4,5,2,1]);
solve([1, 2, 1, 2, 1, 1, 3]);
// ),[2,1,3]);
// })
