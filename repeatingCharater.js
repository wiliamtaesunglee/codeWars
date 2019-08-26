function hasOneChar(s) {

    let newS = [...s]
    
    const compare = new Set(newS)
    
    let response = [...compare].length == 1  
    console.log(response)

    return response
}

  hasOneChar('aaaaaaa'); //true
hasOneChar('aaaab'); //false
hasOneChar('bbbbb'); //true
hasOneChar('bbabb'); //false