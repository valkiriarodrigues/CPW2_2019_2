/**
 * nosso banco de dados fake(in memory DB)
 */

 //cria o objeto sidney
 let sidney = new Contato('Sidney Roberto','(67) 99999-9999', 'sidney@email.com','29/02/2003' );
 let lucas = new Contato('Lucas Negri', '(67) 99898-9595', 'lucas@gmail.com', '54/85/1997' );
 let valkiria = new Contato('Valkira Rodrigues', '(67) 98989-7856', 'valkiria@hotmail', '15/87/1996');

var contatos = [sidney, lucas, valkiria];

    

renderizarTabelaContatos(contatos);
renderizarCardsContatos(contatos);

function salvarContato(event){ 
    //inibe a recarga da pagina
    event.preventDefault();

    //let nome = document.querySelector('#nome'). value; recupera os valores do usuario(val = value)
    let nome = $ ('#nome') . val();
    let telefone = $ ('#telefone') . val();
    let email = $ ('#email') . val();
    let dataNascimento = $ ('#dataNascimento') . val();

    //criar um objeto de contato
    let contato = {nome, telefone, email, dataNascimento};

    //adiciona o contato no nosso banco de dados(no final do vetor)
    contatos.push(contato);

    //invoca a renderização da tabela
    renderizarTabelaContatos(contatos);

    //invoca a renderização dos cards
    renderizarCardsContatos(contatos);


}

function renderizarTabelaContatos(listaContatos){
    if(listaContatos.length > 0 ){
        let areaListagemContatos=document.getElementById('tabelaContatos');

        /**
         * cria a tabela
         */
         let tabela= document.createElement('table');

         let cabecalho=criarCabecalhoTabela();

         //adiciona o cabecalho dentro da tabela
         tabela.appendChild(cabecalho);

         let corpoTabela=criarCorpoTabela(listaContatos);
         //adiciona o corpo da tabela na tabela
         tabela.appendChild(corpoTabela);

         /**
          * limpa a area de listagem
          */
         areaListagemContatos.innerHTML=''; //recebe uma string vazia

         /**
          * adiciona o cabeçalho dentro da tabela
          */
         tabela.appendChild(cabecalho);

         /**
          * adiciona a tabela dentro da area de listagem
          */
         areaListagemContatos.appendChild(tabela);



    }
}

function criarCabecalhoTabela(){

         /**
          * cria o cabeçalho da tabela
          */
         let cabecalho=document.createElement('thead');
         let linhaCabecalho=document.createElement('tr');
         let colunaNome=document.createElement('th');
         colunaNome.innerText= 'Nome'; //texto que vai dentro da tag
         let colunaTelefone=document.createElement('th');
         colunaTelefone.innerText= 'Telefone';
         let colunaEmail=document.createElement('th');
         colunaEmail.innerText= 'Email';
         let colunaDataNasc=document.createElement('th');
         colunaDataNasc.innerText= 'Data Nasc';
         
         /**
          * adiciona as colunas na linha do cabeçalho
          */
         linhaCabecalho.appendChild(colunaNome);
         linhaCabecalho.appendChild(colunaTelefone);
         linhaCabecalho.appendChild(colunaEmail);
         linhaCabecalho.appendChild(colunaDataNasc);

         /**
          * adicionar a linha do cabeçalho no cabeçalho
          */
         cabecalho.appendChild(linhaCabecalho);

         //retorta o cabeçalho criado
         return cabecalho;

}

function criarCorpoTabela(listaContatos){
    /**
     * cria o corpo da tabela
     */
    let corpoTabela=document.createElement('tbody');

    /**
     * cria a linha de contatos
     */

     for(let i=0; i < listaContatos.length; i++){
         /**
          * cria uma nova linha no corpo da tabela
          */
         let linha= document.createElement('tr');

         let celulaNome=document.createElement('td');
         celulaNome.innerText=listaContatos[i].nome;
         linha.appendChild(celulaNome);

         let celulaTelefone=document.createElement('td');
         celulaTelefone.innerText=listaContatos[i].telefone;
         linha.appendChild(celulaTelefone);

         let celulaEmail=document.createElement('td');
         celulaEmail.innerText=listaContatos[i].email;
         linha.appendChild(celulaEmail);

         let celulaDataNasc=document.createElement('td');
         celulaDataNasc.innerText=listaContatos[i].dataNascimento;
         linha.appendChild(celulaDataNasc);

         //adiciona a nova linha no corpo da tabela
            corpoTabela.appendChild(linha);
         
     }

     return corpoTabela;
     
     
}

function renderizarCardsContatos(listaContatos){
    //se tiver algum contato 
    if(listaContatos.length>0){
        let areaListagemContatos = document.getElementById('cardsContatos');

        //limpa a area e listagem
        areaListagemContatos.innerHTML = '';

        /**
         * Ao invés de usar um loop, utilizaremos a funcao forEach
         * pega cada um dos contatos e joga na variável pela função anônima
         */
        //contatos.forEach(function(contato) {});
        listaContatos.forEach(function (contato){
            let card = document.createElement('div');
            let inicialNome = document.createElement('span');
            //pega o caractere inicial da String
            inicialNome.innerText = contato.nome.charAt(0);
            let nome = document.createElement('span');

            let tamanhoNome = contato.nome.length;
            //pega todo mundo menos o primeiro 
            nome.innerText = contato.nome.substr(1, tamanhoNome);

            let telefone = document.createElement('span');
            telefone.innerText = contato.telefone;
            let email = document.createElement('span');
            email.innerText = contato.email;
            let dataNasc = document.createElement('span');
            dataNasc.innerText = contato.dataNascimento;

            card.appendChild(inicialNome);
            card.appendChild(nome);
            card.appendChild(telefone);
            card.appendChild(email);
            card.appendChild(dataNasc);

            areaListagemContatos.appendChild(card);
        });
    }
}
function filtrarContatos(){
    //se tiver pelo menos um contato
    if(contatos.length > 0){
    let filtro= document.getElementById('filtro').value;
    filtro = filtro.toLowerCase();

    //filtra os contatos de acordo com o texto digitado pelo usuario no campo de filtro
    
        let contatosFiltrados = contatos.filter(function(contato){
            let nome = contato.nome.toLowerCase(); // converter pra minisculo
            let email = contato.email.toLowerCase();

            //se o nome ou e-mail do contato conter o filtro do usuario retorno o contato
            if(nome.includes(filtro) || email.includes(filtro)){
                return contato;
            }
        });

        renderizarCardsContatos(contatosFiltrados);
        renderizarTabelaContatos(contatosFiltrados);

}
}
