function maiorMenor(vetor) {
  
  let maior = vet[0];
  let menor = vet[0];

  for(let i = 0; i < vet.length; i++){
    if(vet[i] > maior){
      maior = vet[i];
    }else if(vet[i] < menor){
      menor = vet[i];
    }
  }
  return [maior, menor];

}


let vet = [1,2,3,4,5,6,7,9,10];
console.log(maiorMenor(vet));