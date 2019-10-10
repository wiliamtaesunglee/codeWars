function solve(s){
    let upperCase = 0
    let lowerCase = 0
    let arrS = s.split('')
    let arrSCount = arrS.map(letter => {

        // console.log(letter.toUpperCase())
        
        letter === letter.toUpperCase() ? upperCase++ : lowerCase++
    })

    console.log('upper', upperCase,'lower', lowerCase )

    let response = upperCase > lowerCase ? s.toUpperCase() : s.toLowerCase()

    console.log(response)

    return response
}

solve("code")
// ,"code");
solve("CODe")
// ,"CODE");
solve("COde")
// ,"code");
solve("Code")
// ,"code");