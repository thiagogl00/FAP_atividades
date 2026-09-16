# Atividades

## Arquivo: automatizaveis.ts

O script abaixo pergunta ao usuário se um cenário pode ser automatizado e conta quantos foram classificados como automatizáveis e não automatizáveis.

### Objetivo

- Ler 5 cenários;
- Perguntar se cada cenário é automatizável;
- Validar a resposta do usuário;
- Contar quantos cenários foram aceitos ou rejeitados;
- Exibir o total final.

### Como funciona

1. O código importa a biblioteca `prompt-sync` para capturar entradas pelo terminal.
2. Cria duas variáveis para armazenar os totais:
   - `automatizaveis`
   - `naoAutomatizaveis`
3. Usa um loop `for` para repetir a pergunta 5 vezes.
4. Dentro do laço, um `while (true)` mantém o programa pedindo a resposta até que o usuário informe uma entrada válida.
5. Se a resposta for `sim`, o cenário é considerado automatizável.
6. Se a resposta for `não` ou `nao`, o cenário é classificado como não automatizável.
7. Qualquer outra entrada exibe a mensagem `Ocorreu um erro` e repete a pergunta.
8. Ao final, o programa mostra o total de cada categoria.

### Exemplo de fluxo

```ts
const cenario = prompt(`Digite o 1° cenário: `);
const resposta = prompt(`É automatizavél? [sim/não]: `).toLowerCase();
```

Se o usuário digitar:

- `sim` → o cenário entra na contagem de automatizáveis;
- `não` → o cenário entra na contagem de não automatizáveis;
- outro valor → aparece uma mensagem de erro e a pergunta se repete.
