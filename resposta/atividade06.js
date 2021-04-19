function jurosSimples(capital, taxa, tempo){
  let juros = capital*taxa*tempo;
  console.log(`Juros simples: ${juros}`);
  console.log(`Montante: ${juros + capital}`);
}

function jurosComposto(capital, taxa, tempo){
  //M = C (1+i)t
  const valor = 1 + taxa;
  const calculate = Math.pow(valor, tempo);
  const montante = capital * calculate;

  console.log(`Juros composto : ${montante}`);
  let juros = montante - capital;
  console.log(`Juros : ${juros}`);
}

jurosSimples(300,2,4);
jurosComposto(300,2,4)