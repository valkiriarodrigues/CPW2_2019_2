//controller controlador dos dados de contatos (controle de dados)

class ContatoController{

    constructor(contatos){ // constrir um novo objeto da classe
        this.contatos=contatos;
        this.contatosFiltados=contatos;
    }

    //criar o metodo salvar
    salvar(contato){
        this.contatos.push(contato);
        
    }

    //criar o metodo filtrar vai receber a consulta
    filtrar(filtro){
        if(this.contatos.length > 0){
            this.contatosFiltrados = this.contatos.filter(function(contato){
                let nome = contato.nome.toLowerCase(); // converter pra minisculo
                let email = contato.email.toLowerCase();

                //se o nome ou e-mail do contato conter o filtro do usuario retorno o contato
                if(nome.includes(filtro) || email.includes(filtro)){
                    return contato;
                }
            });

        }

        return this.contatosFiltrados;

    }

    //,metodo que me recupera todos os contatos 
    recuperarTodos(){
        return this.contatosFiltados;
    }
    
}

