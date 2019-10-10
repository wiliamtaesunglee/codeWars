function solve(s){  
    //..
    let sLength = s.length
    let counter = 0
    console.log(sLength)

    let position = Math.floor(sLength / 2)

    let subSOne = s.substring(0, position)
    let subSTwo = s.substring(position + 1, sLength)

    console.log(subSOne , subSTwo)

    for (i = 0; i < subSTwo.length; i++ ) {
        while (subSOne.length > 0) {
            if (subSOne[0] === subSTwo[i]) {
                counter++
            } else if (i = subSOne.length - 1) {
                subSOne.shift()
                i = 0
            }
        }
    }

    console.log(counter)

}

// solve("abcd")
// ,0);
solve("abcda")
// // ,1);
// solve("abcdabc")
// // ,3);
// solve("abcabc")
// // ,3);
// solve("abcabca")
// // ,1);
// solve("aaaa")
// // ,2);
// solve("aa")
// // ,1);
// solve("a")
// // ,0);