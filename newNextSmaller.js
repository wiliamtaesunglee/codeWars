function nextSmaller(n) {
    let newN = n.toString()
    let response = - 1
    for (i = newN.length; i >= 0; i --) {
        let b = newN.length
        let first = newN.substring(0, i)
        // let second = newN[i]
        let third = newN.substring(i, b).split('').sort((a, b) => a - b).join('')
        let arrayN = first + third
        // console.log(arrayN, third)
        let compare = Number(arrayN)
        if (compare < n) {
            resposne = Number(arrayN)
            break
        }
    }
    console.log(response)
    return response
    
  }


nextSmaller(531)//, 1234567890)

