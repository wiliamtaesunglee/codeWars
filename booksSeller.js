function stockList(listOfArt, listOfCat) {
  // ...

  const listFilter = listOfArt.filter(function(item) {
    return listOfCat.includes(item[0]);
  });

  

  console.log(listFilter);
}

b = ["ABAR 200", "CDXE 500", "BKWR 250", "BTSQ 890", "DRTY 600"];
c = ["A", "B"];
// res = "(A : 200) - (B : 1140)";
console.log(stockList(b, c));
