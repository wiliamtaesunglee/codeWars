function solution(number) {
  let counter = 0;
  let acc = 0;
  while (counter < number) {
    if (counter % 3 === 0 || counter % 5 === 0) {
      acc += counter;
    }
    counter++;
  }
  return acc;
}

solution(10);
