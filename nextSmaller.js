function nextSmaller(n) {
    let response = -1
    let newN = n.toString().split('').sort((a,b) => a - b).join('')

    if (newN <= n) {
      for (i = n -1; i >= -1; i--) {
        let smaller = i
        let newI = smaller.toString().split('').sort((a,b) => a - b).join('')

        if (newI == newN) {
            // console.log(i)
            response = i   
            break
        } else if (newI.length !== newN.length) {
            break
        }
    }  
    }

    
    // console.log(response)
    return response
  }







  nextSmaller(21)
//    12)
//   nextSmaller(907)
// // //   , 790)
//  nextSmaller(531) //, 513)
//  nextSmaller(135) //, -1)
//  nextSmaller(2071) //, 2017)
//  nextSmaller(1027) //, -1)
//  nextSmaller(414) 
 ////




