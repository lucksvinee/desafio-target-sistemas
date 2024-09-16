function verificarFibonacci(num) {
  let a = 0,
    b = 1;

  if (num === 0 || num === 1) {
    console.log(num + " pertence a sequência Fibonacci.");
    return;
  }

  for (let i = 2; b <= num; i++) {
    let temp = b;
    b = a + b;
    a = temp;

    if (b === num) {
      console.log(num + " pertence a sequência de Fibonacci.");
      return;
    }
  }
  console.log(num + " não pertence à sequência de Fibonacci.");
}

verificarFibonacci(21);
verificarFibonacci(40);
