function groupByCommas(n) {
  let arrN = n.toString().split('').reverse((a,b) => a - b)
  let newArrN = []
//   console.log('arrN', arrN)
  let counter = 0
    for (i = 0; i < arrN.length; i++) {
        counter++
        if (counter % 3 === 0 && counter !== arrN.length) {
            newArrN.push(arrN[i] + ',')
        } else {
            newArrN.push(arrN[i])
        }
    }

    // let response = newArrN.reverse((a,b) => a - b).join('')
    let response = (newArrN.join('').split('').reverse((a,b) => a -b).join(''))

    console.log(response)

    return response
}

groupByCommas(1)
// , '1');
groupByCommas(10)
// , '10');
groupByCommas(100)
// , '100');
groupByCommas(1000)
// // , '1,000');
groupByCommas(10000)
// // , '10,000');
groupByCommas(100000)
// // , '100,000');
groupByCommas(1000000)
// // , '1,000,000');
groupByCommas(35235235)
// // , '35,235,235');