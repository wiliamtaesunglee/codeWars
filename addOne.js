function oddOne(arr) {
    // Code here
    let odd = arr.filter(a => a % 2 !== 0 ? a : null)
    // console.log(odd)
    let response = arr.indexOf(...odd)
    console.log(response)
    return response

  }
oddOne([2,4,6,7,10]) // => 3
oddOne([2,16,98,10,13,78]) // => 4
oddOne([4,-8,98,-12,-7,90,100]) // => 4
oddOne([2,4,6,8]) // => -1