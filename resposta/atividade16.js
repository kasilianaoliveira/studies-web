function calculate(num1, operacao ,num2){

  switch (operacao) {
    case '+':
      return num1 + num2;
      break;
    case '-':
      return num1 - num2;
      break;
    case '*':
      return num1 * num2;
      break;
    case '/': 
      return num1 / num2;
      break;
    default:
      return 'error';
      break;
  }
}

console.log(calculate(2,'+',3));
console.log(calculate(2,'-',3));
console.log(calculate(2,'*',3));
console.log(calculate(4,'/',2));
console.log(calculate(2,'.',3));
