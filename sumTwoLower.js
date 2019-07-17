// function sumTwoSmallestNumbers(numbers) {  
//     //Code here

//     let num = numbers.map(elem => {
//         if (elem >= 0) {
//             return elem
//         }
//     });


//     let minOne = Math.min(...num)
//     let minTwo = num.length > 1 ? Math.min.apply(null, num.filter( numb => numb != minOne)) : 0
//      return num.length > 0 ? minOne + minTwo : 0
//     }

  console.log(sumTwoSmallestNumbers([5, 8, 12, 19, 22, 5]) )
//   13
  console.log(sumTwoSmallestNumbers([15, 28, 4, 2, 43]))
//   6
  console.log(sumTwoSmallestNumbers([3, 87, 45, 12, 7]))
//   10 
  console.log(sumTwoSmallestNumbers([23, 71, 33, 82, 1])) 
//   24
  console.log(sumTwoSmallestNumbers([]))
//   16
  

function sumTwoSmallestNumbers(numbers) {  
    var [ a, b ] = numbers.sort((a, b) => a - b)
    console.log([a,b])
    return a + b
  }

