var countBits = function(n) {
    // Program Me
    let bin = n.toString(2).split('').filter(item => !!Number(item) ? Number(item) : null).length
    console.log(bin)
    return bin
  };

countBits(0)//, 0);
countBits(4)//, 1);
countBits(7)//, 3);
countBits(9)//, 2);
countBits(10)//, 2);