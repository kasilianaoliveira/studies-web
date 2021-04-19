function calculate(param1){
  const receberValor = param1;
  const result = receberValor.toFixed(2);
  
  console.log(`R$ ${result.toString().replace(".", ",")}`)
}

calculate(0.3000);