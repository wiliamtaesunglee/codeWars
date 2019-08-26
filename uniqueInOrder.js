var uniqueInOrder=function(iterable){
    // your code here - remember iterable can be a string or an array
    // let arr = []
    // let iterableArr = typeof iterable == 'object' ? iterable : iterable.split('')
    // let validation = iterableArr.filter((letter, ind) => {
    //     iterableArr[ind] !== iterableArr[ind + 1] ? arr.push(iterableArr[ind]) : 'nop'
    // })

    // console.log(arr)
    // console.log(typeof iterable == 'object')   
    // return arr
    let test = [...iterable]
console.log(test.length)
  }

  uniqueInOrder(['b','', 'c', '', 'a'])
//   , ['A','B','C','D','A','B'])
// uniqueInOrder([1,2,2,3,3]) 
// uniqueInOrder(['a', 'b', 'b' ]) 