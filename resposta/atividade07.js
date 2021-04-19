function bhaskara (ax2, bx, c){
  let results = [];
  let delta = (bx ** 2) - (4 * ax2 * c);

  if(delta < 0){
    return "Delta negativo";
  }

  let x1 = (- bx + Math.sqrt(delta))/2 * ax2;
  let x2 = (- bx - Math.sqrt(delta))/2 * ax2;

  const xv = x1.toFixed(2);
  const xv2 = x2.toFixed(2);
  
  results.push(xv);
  results.push(xv2);

  return results;
}

console.log(bhaskara(10, 5, -6));