
type CasoDeTeste = {
    id: number,
    titulo: string,
    descricao: string,
    automatizado: boolean
}

function criarCasoDeTeste(id:number,titulo:string,descricao:string,automatizado:boolean): CasoDeTeste{
    return {id,titulo,descricao,automatizado};
}

function descrever({id,titulo,descricao,automatizado}:CasoDeTeste):string{
    return  `Id: ${id} - Título: ${titulo} - Descrição: ${descricao} - Automatizado: ${automatizado}`
}   

function marcarAutomatizado(casoDeTeste:CasoDeTeste): CasoDeTeste{
    casoDeTeste.automatizado =  true;
    return casoDeTeste;    
}

const primeiroCasoDeTeste = criarCasoDeTeste("1","Autenticação","Login via número de telefone e código de verificação (SMS)",false);  
const automatizado = marcarAutomatizado(primeiroCasoDeTeste);
const descricao = descrever(primeiroCasoDeTeste);
