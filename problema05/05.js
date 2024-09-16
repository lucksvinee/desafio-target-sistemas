function inverterString(str) {
  let stringInvertida = "";
  for (let i = str.length - 1; i >= 0; i--) {
    stringInvertida += str[i];
  }
  return stringInvertida;
}

// Entrada da string pode ser definida aqui
const stringOriginal = "Oi, eu sou o Goku :D ";

const resultado = inverterString(stringOriginal);

console.log("String original: " + stringOriginal);
console.log("String invertida: " + resultado);
