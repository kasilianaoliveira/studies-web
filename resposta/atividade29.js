function contVet(vetor) {
  let noIntervalo = 0;
  let foraIntervalo = 0;

  for(let i = 0; i < vet.length; i++){
    if(vet[i] >= 10 && vet[i] <=20){
      noIntervalo ++;
    }else {
      foraIntervalo ++;
    }
  }
  return [noIntervalo, foraIntervalo];
}

let vet = [1,2,3,4,5,6,10,11,12,15,16,20,21];
console.log(contVet(vet))