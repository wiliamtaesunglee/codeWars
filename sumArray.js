// Sum Numbers
function sum (numbers) {
    "use strict";
    let sum = numbers.reduce((acc , curr) => {
        return acc += curr
    }, 0)
    console.log(sum)

    return sum
    
};

sum([])
// , 0);
sum([1, 5.2, 4, 0, -1])
// , 9.2);