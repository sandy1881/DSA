function Factorial(n){
  if(n === 1){
    return 1;
  }
  return n*Factorial(n-1);
}

Factorial(10);
console.log(Factorial(8))
