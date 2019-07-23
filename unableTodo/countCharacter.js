function count(string) {
  var count = {};
  string.split("").forEach(s => {
    count[s] ? count[s]++ : (count[s] = 1);
  });
  console.log(count);
}

count("aba");
