function setAlarm(employed, vacation) {
  return vacation === true || (employed === false && vacation === false)
    ? false
    : true;
}

console.log(setAlarm(false, false));
