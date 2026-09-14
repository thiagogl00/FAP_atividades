const resultados = ["passou", "falhou", "passou", "passou", "falhou"];

let aprovados = 0;
let reprovados = 0;

for(let i =0; i<resultados.length;i++)
    if(resultados[i] === "passou")
        aprovados++;
    else
        reprovados++;

console.log(`Aprovados: ${aprovados}, Reprovados: ${reprovados}`)