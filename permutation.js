function permutations(string) {
  console.log(string)
    let newString = string
    let arrayString = []
  for (i = 0; i < string.length; i++) {
      let permutString = newString[0] + newString[i] 
      console.log(permutString)
  }
}

permutations('aabb')