function PA (n, a1, r){
  let an = 0;
  for(let i = 1; i <= n; i++){
    an = a1 + (i - 1)*r
    console.log(an);
  }
  console.log("Soma: " + ((a1 + an) * n)/2);
}

function PG(n, a1, r){
  let an = 0;
  for(let i = 1; i <= n; i++){
    an = a1 * (r**(i - 1));
    console.log(an);
  }
  console.log("Soma: " + (a1 * ((r**n)-1))/(r-1).toFixed(2));
}

PA(10, 10, 15);
console.log("=========");
PG(10, 10, 15);


