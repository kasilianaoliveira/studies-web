let vetPilha = [1, 2, 3, 4, 5];
let vetAdiciona = [6, 7, 8, 9, 10];

function addVetor(vetPilha, vetAdiciona) {
  for(let i = 0; i < vetAdiciona.length; i++) {
    //console.log(vetAdiciona[i]);
    vetPilha.push(vetAdiciona[i]);
  }
  console.log("O que foi adicionado: " + vetAdiciona);
  console.log("Vetor total: " + vetPilha);
}

addVetor(vetPilha, vetAdiciona);