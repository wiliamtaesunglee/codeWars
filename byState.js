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

  let strLen = str.length;
  let newObj = {
    Arizona: [],
    California: [],
    Idaho: [],
    Indiana: [],
    Massachusetts: [],
    Oklahoma: [],
    Pennsylvania: [],
    Virginia: []
  };
  for (let i = strLen; i >= 0; --i) {
    let strValid = str[str.length - 2] + str[str.length - 1];
    let strTest = str[i - 2] + str[i - 1];
    Object.keys(strState).map(elem => {
      let validator = i === 0 ? true : false;
      if (strTest === elem || strValid === elem || validator === true) {
        str = str.replace(` ${elem}`, `${elem};`);
      }
    });
  }

  Object.keys(strState).map(elem => {
    str.split(";").map(item => {
      let stateInitial = item[item.length - 2] + item[item.length - 1];
      if (elem === stateInitial) {
        newItem = item.replace(stateInitial, ` ${strState[elem]}`);

        newObj[strState[elem]].push(newItem);
      }
    });
  });
  let response = [];
  let resultMap = Object.keys(newObj).map(elem => {
    if (newObj[elem].length !== 0) {
      response.push(`${elem}\r\n..... ${newObj[elem]}\r\n `);
    }
  });

  let newResponse = response
    .join()
    .split(",")
    .join("");
  console.log(newResponse);
  let compareRresponse =
    "Massachusetts\r\n..... John Daggett 341 King Road Plymouth Massachusetts\r\n..... Sal Carpenter 73 6th Street Boston Massachusetts\r\n Virginia\r\n..... Alice Ford 22 East Broadway Richmond Virginia";
  console.log(newResponse === compareRresponse ? "sim" : "nao");
  console.log(compareRresponse);
}

byState(
  "John Daggett, 341 King Road, Plymouth MA Alice Ford, 22 East Broadway, Richmond VA Sal Carpenter, 73 6th Street, Boston MA"
  // "Massachusetts\r\n..... John Daggett 341 King Road Plymouth Massachusetts\r\n..... Sal Carpenter 73 6th Street Boston Massachusetts\r\n Virginia\r\n..... Alice Ford 22 East Broadway Richmond Virginia
);
