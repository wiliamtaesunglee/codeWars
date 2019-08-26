
function nextSmaller(n) {
    let response = -1
    let newN = n.toString().split('').sort((a,b) => a - b).join('')

    if (newN < n) {
        let newArray = n.toString().split('')
        console.log(Number(newArray[0]))
        let minumumN = Math.min(...newArray) == newArray[0] ? Math.min(...newArray.shift()) : Math.min(...newArray)
        console.log(Number(newArray[0]))
        // for (i = newArray.lengrh; i >= 0; i--) {
        //     let compareArray = newArray.splice(i, 1, minumumN).join('')
        //     console.log(compareArray)
        // }
        
    }
  
    // console.log(response)
    return response
  }







  nextSmaller(1223423)
//    12)
//   nextSmaller(907)
// // //   , 790)
//  nextSmaller(531) //, 513)
//  nextSmaller(135) //, -1)
//  nextSmaller(2071) //, 2017)
//  nextSmaller(1027) //, -1)
//  nextSmaller(414) 
 ////
