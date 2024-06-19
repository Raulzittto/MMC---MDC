
console.log(
    "Insira dois números para calcular seu MDC ( mínimo múltiplo comum )_"
  );
  let numeros = [];
  let entrada_usuário;
  let MDC;
  
  process.stdin.on("data", function (data) {
    entrada_usuário = Number(data.toString().trim());
    numeros.push(entrada_usuário);
   for (let i = 0; i< numeros.length; i ++){
for (let j =i + 1; j<numeros.length; j++ ){
    if (numeros[i]< numeros[j]){
        
    }
}
   
   }
  });