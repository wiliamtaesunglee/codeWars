function firstNonRepeated(s) {
    // your code here
    var count = {};
    [...s].forEach(s => {
      count[s] ? count[s]++ : (count[s] = 1);
    });
    let newArr = Object.keys(count).filter(a => count[a] === 1 ? count[a] : [...s][0])
    console.log(newArr[0])
    return newArr[0]
}

  firstNonRepeated("11223mrvvrwxnjlmkskujqouotnptsqpwxlq21235121222")
  firstNonRepeated("mrvvrwxnjlmkskujqouotnptsqpwxlq")