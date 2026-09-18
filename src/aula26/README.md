# Aula 26

## Arquivo: `src/aula26/funcoes.ts`

O primeiro bloco mostra uma função chamada `somar`:

```ts
function somar(a:number,b:number): number{
  return a+b;
}

const resultado = somar(10,5);
console.log(resultado);
```

A função recebe dois parâmetros numéricos (`a` e `b`), retorna a soma deles e imprime o valor no console.

O segundo bloco mostra `mostrarNome`:

```ts
function mostrarNome(nome:string): void{
  console.log(`Olá, ${nome}!`)
}

mostrarNome("thiago");
```

Aqui a função recebe uma string e não retorna valor (`void`), apenas exibe uma mensagem no terminal.

O terceiro bloco mostra `pegarIdade`:

```ts
function pegarIdade(): number{
  return 25;
}

const idade = pegarIdade();
console.log(idade);
```

Essa função não recebe parâmetros e retorna um número.


O quarto bloco mostra `mostrarMensagem`:

```ts
function mostrarMensagem(): void{
  console.log("Olá! Seja bem-vindo!");
}

mostrarMensagem();
```

---
## Arquivo: `src/aula26/types.ts`

O primeiro bloco cria um tipo chamado `Pessoa`:

```ts
type Pessoa = {nome:string,idade:number};
```

Esse tipo define a estrutura esperada para um objeto que possui duas propriedades: `nome` e `idade`.

Em seguida, a função `criarPessoa` cria e retorna um objeto com essas propriedades:

```ts
function criarPessoa(nome:string,idade:number): Pessoa{
  return{nome,idade};
}
```

A constante `p` recebe um objeto criado pela função:

```ts
const p = criarPessoa("Thiago",24);
console.log(p);
```

O segundo bloco cria um tipo chamado `Produto`:

```ts
type Produto = {nome:string,preco:number,estoque:number};
```

Esse tipo define a estrutura esperada para um objeto que possui duas propriedades: `nome`, `preco` e `estoque`.

Em seguida, a função `criarProduto` cria e retorna um objeto com essas propriedades:

```ts
function criarProduto(nome:string,preco:number,estoque:number): Produto{
  return{nome,preco,estoque};
}
```

A constante `produto` recebe um objeto criado pela função:

```ts
const produto = criarProduto("Teclado com LED",150,59);
console.log(produto);
```

---
## Arquivo: `src/aula26/promises.ts`

O primeiro bloco mostra uma função chamada buscarNome:

```ts
function buscarNome(): Promise<string>{
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve("Juan");
        }, 4000);
    });
}
```

A função não recebe parâmetros e retorna uma Promise que, depois de 4 segundos, é resolvida com a string `Juan`. O tipo `Promise<string>` indica que o resultado da promessa será uma string.

O segundo bloco mostra a função assíncrona executar:

```ts
async function executar(){
    console.log("Início do programa...");
    const nome = await buscarNome();
    console.log(nome);
    console.log("Fim do programa.");
}
```

A função é definida com async, permitindo o uso do await. Primeiro, exibe "Início do programa...". Em seguida, await `buscarNome()` aguarda a Promise ser resolvida. Após os 4 segundos, o nome `Juan` é armazenado na variável nome e exibido no console. Por fim, é mostrada a mensagem "Fim do programa.".

Depois, a função executar é chamada:

```ts
executar();
```

Nesse momento, o código dentro de executar começa a ser executado. Quando chega no `await`, a função aguarda a conclusão de `buscarNome()` antes de continuar sua execução.

A ordem das mensagens será:

```ts
Início do programa...
Juan
Fim do programa.
```

Após os 4 segundos, `buscarNome()` resolve a Promise com `Juan`, permitindo que a função executar continue e exiba o nome e, posteriormente, `Fim do programa.`.

O terceiro bloco mostra uma função chamada delay:

```ts
function delay(ms: number): Promise<void> {
    return new Promise(resolve=>setTimeout(resolve,ms));
}
```

A função recebe um parâmetro numérico chamado ms, que representa o tempo de espera em milissegundos. Ela retorna uma `Promise<void>`, ou seja, uma promessa que não retorna nenhum valor.

O `setTimeout` é utilizado para aguardar o tempo definido no parâmetro ms. Quando esse tempo termina, a `Promise` é resolvida por meio do resolve.

O quarto bloco mostra uma função assíncrona chamada `buscarUsuario`:

```ts
async function buscarUsuario(id: number): Promise<string>{
    await delay(5000); // simula chamada de rede 
    return `Usuário #${id}`;
}
```

A função recebe um parâmetro numérico chamado id e retorna uma `Promise<string>`, indicando que o resultado final será uma string.

Dentro da função, `await delay(5000)` faz o código aguardar 5 segundos antes de continuar. Esse tempo simula uma chamada de rede ou uma operação que demora para ser concluída.

Depois dos 5 segundos, a função retorna uma string utilizando o valor recebido no parâmetro id. Nesse caso, o resultado será "Usuário #42".

O próximo trecho mostra uma mensagem sendo exibida no console:

```ts
console.log("Início do programa...");
```

Essa mensagem é executada imediatamente e indica o início da execução do programa.

Em seguida, a função `buscarUsuario` é chamada:

```ts
const nome = await buscarUsuario(42);
```

A função recebe o valor 42 como id. Como ela utiliza await, o código aguarda a Promise ser resolvida. Após os 5 segundos, o resultado "Usuário #42" é armazenado na variável `nome`.

Por fim, o resultado é exibido no console:

```ts
console.log(nome);
```

A saída será:

```ts
Início do programa...
Usuário #42
```

Entre essas duas mensagens existe uma espera de aproximadamente 5 segundos, causada pelo `await delay(5000)`.
