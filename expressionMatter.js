function expressionMatter(a, b, c) {
    let arr = []
    arr.push(a + b + c)
    arr.push(a + b * c)
    arr.push(a * b + c)
    arr.push(a * b * c)
    arr.push(a * (b + c))
    arr.push((a + b) * c)
    let response = Math.max(...arr)
    console.log(response)
    return response
  }


expressionMatter(2, 1, 2)
// , 6);
expressionMatter(2, 1, 1)
// , 4);
expressionMatter(1, 1, 1)
// , 3);
expressionMatter(1, 2, 3)
// , 9);
expressionMatter(1, 3, 1)
// , 5);
expressionMatter(2, 2, 2)
// , 8);
