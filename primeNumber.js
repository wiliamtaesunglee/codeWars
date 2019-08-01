function isPrime(num) {
  let raiz = num ** (1 / 2);
  for (let i = 2; i <= raiz; i++) if (num % i === 0) return false;
  return num > 1;
}

isPrime(1001);
// "0 is not prime");
// "1 is not prime");
// isPrime(73);
// 2 is prime");
// isPrime(73);
// 73 is prime");
// isPrime(1001);
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
