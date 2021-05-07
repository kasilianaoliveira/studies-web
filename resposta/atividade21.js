function calcularPlano(idade){
  let adicional1 = 80;
  let adicional2 = 50;
  let adicional3 = 95;
  let adicional4 = 130;
  let valor = 100;
  
  if(idade < 10){
    return valor += adicional1;
  }else if(idade <=30){
    return valor+=adicional2;
  }else if(idade <= 60){
    return valor+=adicional3;
  }else if(idade > 60){
    return valor+=adicional4;
  }

}

console.log(calcularPlano(61));