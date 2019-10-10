let fibo = (x) => {
    let fiboStart = [0, 1]
    for (i = 0; i < x; i++ ) {
        fiboStart.push(fiboStart[i] + fiboStart[i+1])
    }
    console.log(fiboStart.reduce((a,b) => a + b) * 4)
}

fibo(5)