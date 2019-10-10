function countBy(x, n) {
    var z = [];
    for (i = x; i <= n * x; i++) {
        if (i % x === 0) {
            z.push(i)
        }
    }
    console.log(z)
    return z;
  }

countBy(1,5), [1,2,3,4,5]
countBy(2,5), [2,4,6,8,10]