function multiples(m, n) {
  let resp = [];
  let i = 0;
  let count = 0;
  while (i < m) {
    i++;
    count += n;
    resp.push(count);
  }
  return resp;
}

multiples(3, 5);
//   , [5, 10, 15])
