/**
 * nosso banco de dados fake(in memory DB)
 */
var contatos = [];

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
    renderizarTabelaContatos();


}

function renderizarTabelaContatos(){
    if(contatos.length > 0 ){
        let areaListagemContatos=document.getElementById('ListagemContatos');

        /**
         * cria a tabela
         */
         let tabela= document.createElement('table');

         /**
          * limpa a area de listagem
          */
         areaListagemContatos.innerHTML=''; //recebe uma string vazia

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
