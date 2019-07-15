var ideas = [
  ["bad", "bAd", "bad"],
  ["bad", "bAd", "bad"],
  ["bad", "bAd", "bad"]
];
var good = 0;
var bad = 0;
ideas.forEach(item => {
  item.map(it => {
    var count = it.toLocaleLowerCase;
    count === bad ? bad++ : good++;
  });
  console.log(bad, good);
});
