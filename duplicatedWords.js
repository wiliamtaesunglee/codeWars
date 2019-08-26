function removeDuplicateWords (s) {
    // your perfect code...
    let newS = new Set(s.split(' '))
    console.log(newS)
    const response = [...newS].join(' ')
    console.log(response)
    return response
    
  }

//   Test.describe('Example tests', _ => {
    // Test.it('should handle example case', _ => {
removeDuplicateWords('alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta')//, 'alpha beta gamma delta');
    // });
//   });

//const removeDuplicateWords = s => [...new Set(s.split(' '))].join(' ')