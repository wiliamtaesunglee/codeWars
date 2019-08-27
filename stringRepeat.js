function repeatStr (n, s) {
    let response = []
    for (i = 0; i < n; i++) {
        response.push(s)
    }

    console.log(response.join(''))
  }

  repeatStr(6, "I") // "IIIIII"
repeatStr(5, "Hello") // "HelloHelloHelloHelloHello"