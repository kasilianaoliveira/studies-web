function calculateNotes (nota) {
  let nota1 = arredondar(nota);
  if(nota1 >= 40){
    console.log("Aprovado com " + nota1);
  }else {
    console.log("Reprovado com " + nota1);
  }
}
function arredondar (nota) {
  if (nota % 5 > 2) {
      return nota + (5 - (nota % 5))
  } else {
      return nota
  }
}

calculateNotes(100);
calculateNotes(30);
calculateNotes(38);
calculateNotes(88);
calculateNotes(61);
