function eliminateUnsetBits(number) {
    let newNumber = number.split('').reverse((a,b) => a - b)
    console.log(newNumber)
    let indexNum = 0
    for (i = 0; i < newNumber.length; i++) {
        if (newNumber[i] == '1') {
            indexNum = newNumber.indexOf(newNumber[i])
            break
        }
    }

    let responseConcat = number.substring(0, indexNum - 1) + number[indexNum] + number.substring(indexNum + 1, number.length).split('0').join('')

    console.log(responseConcat)

    let response = parseInt(Number(responseConcat), 2)
        
    console.log(response)

    return response
  }

  eliminateUnsetBits("11010101010101")
//   , 255));
  eliminateUnsetBits("111")
//   , 7));
  eliminateUnsetBits("1000000")
//   , 1));
  eliminateUnsetBits("000")
//   , 0));