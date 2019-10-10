function pyramid(n) {
    // your code here
    let arr = []
    let newArr = []
    for(let i = 1; i <= n; i++) {
        let count = 0
        while (count < i) {
            newArr.push(1)
            count++
        }
        arr.push(newArr)
        newArr = []
    }
    console.log(arr)
  }

  pyramid(3)