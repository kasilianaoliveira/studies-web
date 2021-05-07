function contar(){
  let vet = [2,9,6,43,12,67,54,1,3]
  let contPar = 0;
  let contImpar = 0;
  
  for(let i = 0; i < vet.length; i++) {
    if(vet[i] % 2 == 0){
      contPar++;
    }else if(vet[i] % 2 == 1){
      contImpar++;
    }
  
  }

  return [contPar, contImpar];
}
console.log(contar());



