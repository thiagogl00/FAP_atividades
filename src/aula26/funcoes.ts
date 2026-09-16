// FUNÇÃO COM PARÂMETRO E RETORNO
function somar(a:number,b:number): number{
  return a+b;
}

const resultado = somar(10,5);
console.log(resultado); 

// FUNÇÃO COM PARÂMETRO SEM RETORNO
function mostrarNome(nome:string):void{
  console.log(`Olá, ${nome}!`)
}

mostrarNome("thiago");

// FUNÇÃO SEM PARÂMETRO COM RETORNO
function pegarIdade(): number{
  return 25;
}

const idade = pegarIdade();
console.log(idade);

// FUNÇÃO SEM PARÂMETRO SEM RETORNO
function mostrarMensagem(): void{
  console.log("Olá! Seja bem-vindo!");
}

mostrarMensagem();