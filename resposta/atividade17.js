function auments(plano, salario){
  let soma = salario;
  switch (plano) {
    case 'A':
      return soma += salario*0.10;
      break;
    case 'B':
      return soma += salario*0.15;
      break;
    case 'C':
      return soma += salario*0.20;
      break;
    default:
      return 'error';
      break;
  }
}

console.log(auments('A', 1000));
console.log(auments('B', 1000));
console.log(auments('C', 1000));