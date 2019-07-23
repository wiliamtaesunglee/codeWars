function isTriangle(a, b, c) {
  return a < b + c && b < a + c && c < a + b && a !== 0 && b !== 0 && c !== 0
    ? true
    : false;
}
