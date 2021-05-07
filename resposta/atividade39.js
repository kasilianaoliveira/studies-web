function trocaTrocaDeVetor(vet1, vet2){
  
  if(vet1.length == vet2.length){
    for(let i=0; i<vet1.length; i++){
      vet1[i] = vet1[i] + vet2[i];
      vet2[i] = vet1[i] - vet2[i];
      vet1[i] = vet1[i] - vet2[i];
    }
  }else {
    return 'tamanhos diferentes';
  }

  console.log('New A: ' + vet1);
  console.log('New B: ' + vet2);

}
let vet1 = [1,2,3];
let vet2 = [4,5,6];
trocaTrocaDeVetor(vet1,vet2)