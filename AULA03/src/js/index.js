/**
 * nosso banco de dados fake(in memory DB)
 */
var contatos = [
    {
        nome: 'Valkiria',
        telefone: '999999999',
        email:'valkiria@hotmail.com',
        dataNascimento:'10/12/1994'
    }
];
renderizarTabelaContatos();

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
        let areaListagemContatos=document.getElementById('listagemContatos');

        /**
         * cria a tabela
         */
         let tabela= document.createElement('table');

         let cabecalho=criarCabecalhoTabela();

         //adiciona o cabecalho dentro da tabela
         tabela.appendChild(cabecalho);

         let corpoTabela=criarCorpoTabela();
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

function criarCorpoTabela(){
    /**
     * cria o corpo da tabela
     */
    let corpoTabela=document.createElement('tbody');

    /**
     * cria a linha de contatos
     */

     for(let i=0; i < contatos.length; i++){
         /**
          * cria uma nova linha no corpo da tabela
          */
         let linha= document.createElement('tr');

         let celulaNome=document.createElement('td');
         celulaNome.innerText=contatos[i].nome;
         linha.appendChild(celulaNome);

         let celulaTelefone=document.createElement('td');
         celulaTelefone.innerText=contatos[i].telefone;
         linha.appendChild(celulaTelefone);

         let celulaEmail=document.createElement('td');
         celulaEmail.innerText=contatos[i].email;
         linha.appendChild(celulaEmail);

         let celulaDataNasc=document.createElement('td');
         celulaDataNasc.innerText=contatos[i].dataNascimento;
         linha.appendChild(celulaDataNasc);

         //adiciona a nova linha no corpo da tabela
            corpoTabela.appendChild(linha);
         
     }

     return corpoTabela;

     
}
