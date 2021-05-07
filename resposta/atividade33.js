
function concatVetor(vetInt, vetString, vetDouble) {
  let uniao = vetInt.concat(vetString, vetDouble);
  console.log(uniao);
}

function concatenar(...args) {
  let result =[];
  for(let i = 0; i < args.length; i++) {
    result = result.concat(args[i]);
  }

  return result
}


let vetInt = [1,2,3,4,5];
let vetString = ["a", "b", "c", "d", "e"];
let vetDouble = [1.2,2.3,3.4,4.5,5.6];

concatVetor(vetInt, vetString, vetDouble);
console.log(concatenar(vetInt, vetString));
console.log(concatenar(vetString, vetDouble));
console.log(concatenar(vetInt, vetString, vetDouble));