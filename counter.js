let a = 1;
let b = 1111;
let counter = 0;
for (a; a <= b; a++) {
  a.toString()
    .split("")
    .forEach(elem => {
      if (elem === "1") counter++;
    });
}

console.log(counter);
