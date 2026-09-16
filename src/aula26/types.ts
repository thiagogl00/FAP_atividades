type Pessoa = {nome:string,idade:number};

function criarPessoa(nome:string,idade:number): Pessoa{
  return{nome,idade};
}

const p = criarPessoa("Thiago",24);
console.log(p);

type Produto = {nome:string,preco:number,estoque:number};

function criarProduto(nome:string,preco:number,estoque:number): Produto{
  return{nome,preco,estoque};
}

const produto = criarProduto("Teclado com LED",150,59);
console.log(produto);