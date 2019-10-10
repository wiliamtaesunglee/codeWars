function alphanumeric(string){
    //your code here
    let test = string.split('').some(a => a === ' ' || a === '_')
    console.log(!test)
    return !test
  }

alphanumeric("Mazinkaiser")//, true)
alphanumeric("hello world_")//, false)
alphanumeric("PassW0rd")//, true)
alphanumeric("     ")//, false)

// function alphanumeric(string){
//     //your code here
//     let test = string.split('').some(a => a === ' ' || a === '_' || a === '!' || a === '' || a === ')' || string.length === 3 && a == /\w/ || string.length === 3 && a !== /\w/ )
//     console.log(!test, string.length)
//     console.log(typeof string, ...string)
//     return string.length == 0 ? false : !test
//   }