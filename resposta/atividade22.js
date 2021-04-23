function anuidade(mes, valor){
  if(mes > 0 && mes < 13){
    let receberValor = 0.05 + 1;
    let tempo = mes - 1;
    const calculate = Math.pow(receberValor,tempo);

    return (valor * calculate).toFixed(2);

  } else {
    
    return 'Mother invalid';
  }
}
console.log(anuidade(4,100))