let vetor = [1,2,3,4,5];
let numInt = 6;


/*function fuc01(vetor, numInt) {
  let result = [];
  for (let i = 0; i < vetor.length; i++){
    result = vetor[i] * numInt;
    console.log(result);
  }
}
*/

function mult(vetor, numInt){
  let result = [];
  vetor.forEach(element => {
    result.push(element * numInt);
  });
  return result;
}

//fuc01(vetor, numInt);
console.log(mult(vetor, numInt));