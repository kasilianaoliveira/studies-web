//maneira tradicional

function media(vetor){
  let total = 0;
  let contVoltas = 0;
  for(let i = 0; i < vetor.length; i++){
    total += vetor[i];
    contVoltas++;
  }
  return total/contVoltas;
}


let vetor = [1, 2, 3, 4, 5,6];

console.log(media(vetor));

