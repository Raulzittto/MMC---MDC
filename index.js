console.log("Vamos calcular MDC ( mínimo múltiplo comum ) de dois numeros_");
console.log("digite o primeiros numeros:");
let numeros1 = "";
let numeros2 = "";
let entrada_usuário;
let MDC;
let MMC;

process.stdin.on("data", function (data) {
  entrada_usuário = Number(data.toString().trim());
  if (!numeros1) {
    numeros1 = entrada_usuário;
    console.log("digite o segundo número: ");
  } else if (!numeros2) {
    numeros2 = entrada_usuário;

    while (numeros2 != 0) {
      var j = numeros2;
      numeros2 = numeros2 % numeros1;
      numeros1 = j;
      MDC = numeros1;
    }
    console.log("O MDC será: " + MDC);
  }

});
