function highestRank(arr){
    //Your Code logic should written here
    var count = {}
    arr.forEach(a => {
        count[a] ? count[a]++ : count[a] = 1
    })

    let response = (Object.keys(count).sort((a,b) => count[b] - count[a]))
    console.log(response)

    return count[response[0]] === count[response[1]] ? Math.max(Number(response[0]), Number(response[1])) : Number(response[0])      
    }

arr = [12, 10, 8, 12, 7, 6, 4, 10, 12];
highestRank(arr) //=> returns 12

arr = [12, 10, 8, 12, 7, 6, 4, 10, 12, 10];
// highestRank(arr) //=> returns 12

arr = [12, 10, 8, 8, 3, 3, 3, 3, 2, 4, 10, 12, 10];
// highestRank(arr) //=> returns 3