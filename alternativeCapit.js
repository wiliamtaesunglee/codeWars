function capitalize(s){
    let array = [...s]
    let response = []
    let secondResponse = []
    array.forEach((letter, ind) => {
        ind % 2 === 0 ? response.push(letter.toUpperCase()) : response.push(letter)
    })

    array.forEach((letter, ind) => {
        ind % 2 !== 0 ? secondResponse.push(letter.toUpperCase()) : secondResponse.push(letter)
    })

    let finalResponse = [response.join(''), secondResponse.join('')]
    
    return finalResponse
  };

//   describe("Basic tests", function(){
    capitalize("abcdef") //,['AbCdEf', 'aBcDeF']);
    capitalize("codewars") //,['CoDeWaRs', 'cOdEwArS']);
    capitalize("abracadabra") //,['AbRaCaDaBrA', 'aBrAcAdAbRa']);
    capitalize("codewarriors") //,['CoDeWaRrIoRs', 'cOdEwArRiOrS']);
    // });