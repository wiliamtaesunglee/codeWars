function minValue(values){
    //your code here
    let newValues = values.toString().split(',').sort()
    var count = {};
    newValues.forEach(function(s) {
        count[s] ? count[s]++ : (count[s] = 1);
      });
      return (parseInt(Object.keys(count).join('')))
  }

  minValue([1, 3, 1])
//   13

minValue([4, 7, 5, 7])
//  457

function minValue(values){
    const n = values
      .filter((e, i, arr) => arr.indexOf(e) === i)
      .sort()
      .join('');
    console.log( values.filter((e, i, arr) => arr.indexOf(e) === i))
  }