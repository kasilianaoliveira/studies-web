function tamanhos(str1, str2) {
  let isTrue = true;

  for (let i = 0; i < str1.length; i++) {
    let charStr1 = str1.charAt(i).toLowerCase();
    for(let j = 0; j < str2.length; j++) {
      let charStr2 = str2.charAt(j).toLowerCase();

      if(charStr1 == charStr2){
       isTrue = true;
       break;
      }else {
        isTrue = false;
      }
    }
    if(!isTrue){
      return isTrue;
    }
  }
  return isTrue;
}

console.log(tamanhos('abc', 'cba'));
console.log(tamanhos('abc', 'cda'));