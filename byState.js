function byState(str) {
  // your code
  let strState = {
    AZ: "Arizona",
    CA: "California",
    ID: "Idaho",
    IN: "Indiana",
    MA: "Massachusetts",
    OK: "Oklahoma",
    PA: "Pennsylvania",
    VA: "Virginia"
  };
  let newStr = [];
  Object.keys(strState).forEach(item => {});

  // console.log(newStr);
}
//   let fraseStateJoin = [];
//   for (var i = 0; i < strFrase.length; i++) {

//     fraseStateJoin.push(`$stateName[i]}\r\n..... ${(strFrase[i])}${stateName[i]}\r\n.....`);
//   }
//   return( fraseStateJoin.join(' '))

/*'AZ': 'Arizona',
'CA': 'California',
'ID': 'Idaho',
'IN': 'Indiana',
'MA': 'Massachusetts',
'OK': 'Oklahoma',
'PA': 'Pennsylvania',
'VA': 'Virginia'*/
byState(
  "John Daggett, 341 King Road, Plymouth MA Alice Ford, 22 East Broadway, Richmond VA Sal Carpenter, 73 6th Street, Boston MA"
);
