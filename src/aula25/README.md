# Aula 25

## Arquivo: `src/aula25/condicionais.ts`
Este arquivo aborda condicionais e operador ternário.

```ts
const statuscode : number = 500;
```

A variável `statuscode` representa um código HTTP.

A estrutura `if/else if/else` verifica o valor:

```ts
if(statuscode === 200)
    console.log("OK: recurso retornado");
else if(statuscode === 201)
    console.log("Created: recurso criado");
else
    console.log(`Status inesperado: ${statuscode}`);
```

Se o código for `200`, mostra sucesso; se for `201`, mostra criação; qualquer outro valor é tratado como inesperado.

Em seguida, há um exemplo de operador ternário:

```ts
const resultado = statuscode < 400? "passou":"falhou";
```

Esse operador funciona como uma condição resumida em uma linha:

- se `statuscode < 400`, o valor é `"passou"`;
- caso contrário, o valor é `"falhou"`.

A execução final mostra:

```ts
console.log(resultado);
```

Esse exemplo ajuda a entender decisões rápidas sem escrever uma estrutura longa de `if`.
---

## Arquivo: `src/aula25/contandoResultados.ts`
Este arquivo trabalha com arrays e contagem de resultados.

```ts
const resultados = ["passou", "falhou", "passou", "passou", "falhou"];
```

A variável `resultados` armazena uma lista de strings representando aprovação ou reprovação.

Depois, são criadas duas variáveis para contar quantos itens são aprovados e quantos são reprovados:

```ts
let aprovados = 0;
let reprovados = 0;
```

O laço `for` percorre o array e verifica cada valor:

```ts
for(let i =0; i<resultados.length;i++)
    if(resultados[i] === "passou")
        aprovados++;
    else
        reprovados++;
```

Se o valor for igual a `"passou"`, aumenta `aprovados`; caso contrário, aumenta `reprovados`.

Ao final, o programa exibe o total:

```ts
console.log(`Aprovados: ${aprovados}, Reprovados: ${reprovados}`)
```

Esse exercício ensina como percorrer vetores e aplicar lógica condicional dentro de loops.

---
## Arquivo: `src/aula25/loops.ts`
Este arquivo demonstra os principais tipos de laços.

Primeiro, há um `for` com índice:

```ts
const testes = ["login", "carrinho", "checkout"];
for(let i = 0;i<testes.length; i++)
    console.log(`${i+1}. ${testes[i]}`)
```

Esse laço percorre a lista e imprime cada item com a posição correspondente, começando em 1.

Depois temos um `for...of`, mais simples para percorrer valores diretamente:

```ts
for(const teste of testes)
    console.log(`executando ${teste}`)
```

Essa estrutura percorre cada elemento do array sem precisar manipular o índice manualmente.

Por fim, o código usa um `while`:

```ts
let tentativas = 0;
while(tentativas<3)
    tentativas++;

console.log(`tentativas: ${tentativas}`)
```

Esse loop incrementa a variável até atingir o valor 3. O uso de `while` é útil quando a condição depende de um valor que muda durante a execução.

---
## Arquivo: `src/aula25/tiposPrimitivos.ts`

Este arquivo demonstra o uso de tipos primitivos e a função `typeof`.

```ts
const nomeDoTeste: string = "Login com sucesso!";
const tentativas: number = 3;
const passou: boolean = true;
```

Essas variáveis recebem valores de tipos específicos: texto, número e booleano.

Também há um valor em uma variável sem tipagem explícita:

```ts
const ambiente = "Homologacao";
let contador = 0;
```

O programa mostra os tipos dos valores em tempo de execução com `typeof`:

```ts
console.log(typeof nomeDoTeste);
console.log(typeof tentativas);
console.log(typeof passou);

console.log(typeof ambiente);
console.log(typeof contador);
```

Isso ajuda a entender que TypeScript trabalha com tipagem estática, mas ainda consegue informar o tipo real em runtime quando necessário.
