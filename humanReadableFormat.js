function formatDuration (seconds) {
    // Complete this function
    let arr = []
    let response = []

    let year = Math.floor(seconds / (3600 * 24 * 30 * 12)) 
        
    if (year > 0) {
        year !== 1 ? arr.push(`${year} years`) : arr.push(`${year} hour`)
    }

    let day = Math.floor(seconds / (3600 * 24)) 
        
    if (day > 0) {
        day !== 1 ? arr.push(`${day} days`) : arr.push(`${day} day`)
    }

    let hour = Math.floor(seconds / 3600) 
        
    if (hour > 0) {
        hour !== 1 ? arr.push(`${hour} hours`) : arr.push(`${hour} hour`)
    }
 
    let min = Math.floor((seconds - hour * 3600) / 60)

    if (min > 0) {
        min !== 1 ? arr.push(`${min} minutes`) : arr.push(`${min} minute`)
    }

    let second = seconds - (hour * 3600 + min * 60)

    if (second > 0) {
        second !== 1 ? arr.push(`${second} seconds`) : arr.push(`${second} second`)
    }

    // console.log(response)

    if (arr.length > 1) {
        if (arr.length === 2) {
            console.log(arr.join(' and '))
            return  arr.join(' and ')
        } else {
            console.log(arr.slice(0, arr.length - 1).join(', ').concat(` and ${arr[arr.length - 1]}`))
           return arr.slice(0, arr.length - 1).join(', ').concat(` and ${arr[arr.length - 1]}`)
        }
        
    } else {
        console.log(arr[0])
        return arr[0]
        
    }
    
  }

  
formatDuration(1)//, "1 second");
formatDuration(62)//, "1 minute and 2 seconds");
formatDuration(120)//, "2 minutes");
formatDuration(3600)//, "1 hour");
formatDuration(3662)//, "1 hour, 1 minute and 2 seconds");