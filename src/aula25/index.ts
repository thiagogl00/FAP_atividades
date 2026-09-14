/* 
function somar(a:number,b:number): number{
  return a+b;
}

const resultado = somar(10,5);
console.log(resultado); 
*/

/* function mostrarNome(nome:string):void{
  console.log(`Olá, ${nome}!`)
}

mostrarNome("thiago"); */

/* 
function pegarIdade(): number{
  return 25;
}

const idade = pegarIdade();
console.log(idade); */

/* function mostrarMensagem(): void{
  console.log("Olá! Seja bem-vindo!");
}

mostrarMensagem(); */

type Pessoa = {nome:string,idade:number};

function criarPessoa(nome:string,idade:number): Pessoa{
  return{nome,idade};
}

const p = criarPessoa("Thiago",24);
console.log(p);