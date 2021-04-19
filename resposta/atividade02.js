function calcularTriagulo(lado1, lado2, lado3){
  if(lado1 != lado2 && lado2 != lado3){
    console.log("Escaleno");
  }else if(lado1 != lado2 && lado2 == lado3 || lado1 == lado2 && lado2 != lado3){
    console.log("Isósceles");
  }else {
    console.log("Equilátero");
  }
}

calcularTriagulo(3,3,3);
calcularTriagulo(3,3,1);
calcularTriagulo(3,2,1);