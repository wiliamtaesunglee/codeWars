// Fatorial

let number = 4;

function fatorial(n) {
  if (n == 0) {
    return 1;
  }
  var resp = n;
  while (n > 2) {
    resp *= --n;
  }
  return resp;
}

// fatorial(number);

// Combinações possíveis

let arrayTeste = [1, 2, 3, 4];

let agrupamento = 2;
let elementos = arrayTeste.length;

let combinacoes =
  fatorial(elementos) /
  (fatorial(agrupamento) * fatorial(elementos - agrupamento));

console.log(combinacoes);
