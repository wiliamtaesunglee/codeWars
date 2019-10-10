function letterFrequency(text) {
    let newText = text.toLowerCase()
    let count = {};
    let arr = newText.split(' ').join('')
    let newArr = [...arr]
    
    newArr.forEach(s => {
      count[s] ? count[s]++ : (count[s] = 1);
    });
    console.log(count);
  
    let response = Object.keys(count).sort((a , b) => count[b] === count[a] ? a - b : count[b] - count[a]).map(a => [a, count[a]])

    console.log(response)
    return response
}
  
  letterFrequency('aaAabb dddDD hhcc')

  