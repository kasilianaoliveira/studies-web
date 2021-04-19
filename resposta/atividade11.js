function leapYear(ano){
  if(ano % 4 == 0 || ano % 100 == 0 && ano % 400 == 0){
    return true;
  }else {
    return false;
  }
}

console.log(leapYear(2021));
console.log(leapYear(1600));
console.log(leapYear(2000));
console.log(leapYear(2020));
console.log(leapYear(100));
console.log(leapYear(1989));
console.log(leapYear(1999));