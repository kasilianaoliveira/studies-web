//let stringPontuacoes = "10, 20, 20, 8, 25, 3, 0, 30, 1";
let stringPontuacoes = "30, 40, 20, 4, 51, 25, 42, 38, 56, 0"
function avaliaPontuacoes (stringPontuacoes) {
    let pontuacoes = stringPontuacoes.split(", ")
    let qtdQuebraDeRecords = 0;
    let maiorQtd = 0;
    let piorJogo = 0;
    let maiorPontuacao = pontuacoes[0];
    let menorPontuacao = pontuacoes[0];

    for(let i = 0; i < pontuacoes.length; i++){
      if(pontuacoes[i] > maiorPontuacao){
        maiorPontuacao = pontuacoes[i]
        qtdQuebraDeRecords++;
        //maiorQtd = qtdQuebraDeRecords + 1;
      }else if(pontuacoes[i] < menorPontuacao){
        menorPontuacao = pontuacoes[i];
        piorJogo = i + 1;
      }

    }
    return [maiorQtd, piorJogo];
}
 
console.log(avaliaPontuacoes(stringPontuacoes));