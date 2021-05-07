function contarNeg(vetor) {
  let contNeg = 0;
  let positive = 0;

  for(let i = 0; i < vetor.length; i++) {
    if(vetor[i] < 0){
      contNeg ++;
    }else {
      positive++;
    }
  }
  return [contNeg];
}

let vetor = [-1,-2,-3,-5,-6,-8,1,2,3,4,6,5,7,8,9]

console.log("Quantidade negativa: " + contarNeg(vetor));