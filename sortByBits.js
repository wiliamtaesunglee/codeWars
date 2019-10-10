function sortByBit(arr) {
    // your solution here
    
    let arrMap = a.map(elem => {
        return (elem.toString(2))
    })

    let newArrRes = []
    for (i = 0; i < arrMap.length; i++) {

        let bin = arrMap[i].split('0').map(item => {
            if (item.length > 0) return item
        })
        
        let newBin = (bin.join('').length)
        newArrRes.push([arr[i], newBin])
    }
    
    let newArrResT = newArrRes.sort((a, b) => a[1] - b[1])
    console.log(newArrResT)
  }


// Basic test

let a = [3, 8, 3, 6, 5, 7, 9, 1];
sortByBit(a);

// Test.assertDeepEquals(a, [1, 8, 3, 3, 5, 6, 9, 7]);

// let b = [9,4,5,3,5,7,2,56,8,2,6,8,0];
// sortByBit(b);

// Test.assertDeepEquals(b, [0, 2, 2, 4, 8, 8, 3, 5, 5, 6, 9, 7, 56]);
