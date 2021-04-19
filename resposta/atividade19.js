function calcularConta(cod, quant){
  let cont = quant;
  switch (cod) {
    case 100:
      cont = quant*3;
      console.log(cont);
      break;
    case 200:
      cont = quant*4;
      console.log(cont);
      break;
    case 300:
      cont = quant*5.5;
      console.log(cont);
      break;
    case 400:
      cont = quant*7.5;
      console.log(cont);
      break;
    case 500:
      cont = quant*3.5;
      console.log(cont);
      break;
    case 600:
      cont = quant*2.8;
      console.log(cont);
      break;
    default:
      console.log("Produto nao existente");
      break;
  }
}

calcularConta(100, 2);
calcularConta(200, 2);
calcularConta(300, 2);
calcularConta(400, 2);
calcularConta(500, 2);
calcularConta(600, 2);
