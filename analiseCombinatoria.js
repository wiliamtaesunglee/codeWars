// // Fatorial

// let number = 4;

// function fatorial(n) {
//   if (n == 0) {
//     return 1;
//   }
//   var resp = n;
//   while (n > 2) {
//     resp *= --n;
//   }
//   return resp;
// }

// // fatorial(number);

// // Combinações possíveis

// let arrayTeste = [1, 2, 3, 4];

// let agrupamento = 2;
// let elementos = arrayTeste.length;

// let combinacoes =
//   fatorial(elementos) /
//   (fatorial(agrupamento) * fatorial(elementos - agrupamento));

// console.log(combinacoes);


function testeSoma(arr) {
  
  let newArr = arr.map(elem => elem)
  let validator = false;

  while (newArr.length !== 2 && validator !== true) {
    
    for (i = 0; i < newArr.length; i++) {
      let a = newArr[0];
      let b = newArr[i+1]
      let c = newArr[i+2]
      let sumTest = a + b + c
      console.log(a, b ,c, sumTest )
      if (sumTest === 12 && c !== undefined && b !== undefined) {     
        validator = true
      } else if ((i + 1) === newArr.length || c === undefined ) {
        newArr.shift()
        
      }
   }
 
  }
  console.log(validator)
    
}

let arrayTeste = [7,7,7,7,5]

testeSoma(arrayTeste)
 