let vetor = [5.0,7.0,9.0]

function notas(vetor) {

  for(let i = 0; i < vetor.length; i++){
    if(vetor[i] <= 4.9){
      console.log("Conceito D");
    }else if(vetor[i] <= 6.9){
      console.log("Conceito C");
    }else if(vetor[i] <= 8.9){
      console.log("Conceito B");
    }else if(vetor[i] <= 10.0){
      console.log("Conceito A");
    }
  }
}

notas(vetor);
