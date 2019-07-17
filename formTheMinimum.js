function minValue(values){
    //your code here
    let newValues = [];
    for (i = 0; i < values.length; i++) {
        if ( values[i] < values[i + 1]) {
            newValues.push(values[i])
        } else if (values[i] < values[i + 1]) {
            newValues.push(values[i+1];
        } 
         
     }
     console.log(parseInt(newValues.join('')))
  }

  minValue([1, 3, 1])
//   13

minValue([4, 7, 5, 7])
//  457