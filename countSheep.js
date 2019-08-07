var countSheep = function (num){
    let numArr = []
    for (i = 1; i <= num; i++) {
        (numArr.push(`${i} sheep...`))
    }
    let response = numArr.join('')
    console.log(response)
    return response
  }


countSheep(1)
// , "1 sheep...");
countSheep(2)
// , "1 sheep...2 sheep...");
countSheep(3)
// , "1 sheep...2 sheep...3 sheep...");