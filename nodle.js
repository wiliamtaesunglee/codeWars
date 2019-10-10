function findNeedle(haystack) {
    // your code here
    let response = []
    haystack.filter(item => {if (item === 'needle') response.push( `found the needle at position ${haystack.indexOf(item)}`)} )
    console.log(...response)
    return response[0]
}

  findNeedle(['hay', 'junk', 'hay', 'hay', 'moreJunk', 'needle', 'randomJunk'])
