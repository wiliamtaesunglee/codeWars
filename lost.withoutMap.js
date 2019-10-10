function maps(x){
    let response = []
    x.forEach(i => {response.push(i * 2)})
    console.log(response)
    return response
  }

//   Test.describe("Example tests",()=>{
    maps([1, 2, 3])
    // , [2, 4, 6]);
    maps([4, 1, 1, 1, 4]) //, [8, 2, 2, 2, 8]); 
    maps([2, 2, 2, 2, 2, 2]) //, [4, 4, 4, 4, 4, 4]); 
//   });