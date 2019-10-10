function adjacentElementsProduct(array) {
    // max product
    let arrLength = array.length
    let newArray = []
    console.log(array)
    for (i = 0; i <= arrLength; i++) {
        newArray.push(array[0] * array[1])
        array.shift()
    }
    let cleanArray = newArray.filter(Boolean)
    let response = Math.max(...cleanArray)
    console.log(response == -Infinity ? 0 : response)
    return response
  }

  adjacentElementsProduct([1, 0, 1, 0])
//   , 40);
//   adjacentElementsProduct([1, 2, 3])
// //   , 6);
//   adjacentElementsProduct([1, 5, 10, 9])
// //   , 90);
//   adjacentElementsProduct([4, 12, 3, 1, 5])
// //   , 48);
//   adjacentElementsProduct([5, 1, 2, 3, 1, 4])
//   , 6);