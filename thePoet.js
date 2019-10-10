function pendulum(values) {
    let newValues = values.sort((a,b) => a - b)
    let response = []
    console.log(newValues)
    for(let i = 0; i < newValues.length; i++) {
        i % 2 === 0 ? response.unshift(newValues[i]) :  response.push(newValues[i])
    }
    console.log(response)
    return response
}

pendulum ([11, -16, -18, 13, -11, -12, 3, 18 ]) //==> [13, 3, -12, -18, -16, -11, 11, 18]
