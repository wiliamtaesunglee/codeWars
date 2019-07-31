const { PerformanceObserver, performance } = require("perf_hooks");

function isPrime(num) {
  let validation = false;
  if (num <= 1) return console.log(false);

  let divisor = 2;

  let primeFactors = [];

  while (num > 1) {
    if (num % divisor === 0) {
      num = num / divisor;
      primeFactors.push(divisor);
    } else {
      if (num ** (1 / 2) > divisor) {
        validation = true;
      }
      divisor += 1;
    }
  }

  let primeFactorsNoRepeat = [...new Set(primeFactors)];
  var t0 = performance.now();
  let teste = validation || primeFactors.length == primeFactorsNoRepeat.length;
  var t1 = performance.now();
  console.log(teste, t1 - t0);
  // return teste;
}

// isPrime(0);
// "0 is not prime");
// "1 is not prime");
// isPrime(2);
// 2 is prime");
// isPrime(73);
// 73 is prime");
isPrime(1111111111001);
// isPrime(81);
// "75 is not prime");
// isPrime(-1);
// "-1 is not prime");

// isPrime(3);
// 3 is prime");
// isPrime(5);
// 5 is prime");
// isPrime(7);
// 7 is prime");
// isPrime(41);
// 41 is prime");
// isPrime(5099);
//  "5099 is prime");

// isPrime(4);
// "4 is not prime");
// isPrime(6);
// "6 is not prime");
// isPrime(8);
// "8 is not prime");
// isPrime(9);
// 9 is not prime");
// isPrime(45);
// "45 is not prime");
// isPrime(-5);
// "-5 is not prime");
// isPrime(-8);
// "-8 is not prime");
// isPrime(-41);
//  "-41 is not prime");
