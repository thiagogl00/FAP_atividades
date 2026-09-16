const statuscode : number = 500;

if(statuscode === 200)
    console.log("OK: recurso retornado");
else if(statuscode === 201)
    console.log("Created: recurso criado");
else
    console.log(`Status inesperado: ${statuscode}`);

//Operador ternário: decisão curta em uma linha só
const resultado = statuscode < 400? "passou":"falhou";

console.log(resultado);