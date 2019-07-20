function gooseFilter(birds) {
  var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];

  const birdsFilter = birds.filter(item => {
    return !geese.includes(item);
  });
  return birdsFilter;
}

gooseFilter([
  "Mallard",
  "Hook Bill",
  "African",
  "Crested",
  "Pilgrim",
  "Toulouse",
  "Blue Swedish"
]);
// ["Mallard", "Hook Bill", "Crested", "Blue Swedish"]
