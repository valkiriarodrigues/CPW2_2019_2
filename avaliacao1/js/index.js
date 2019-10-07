
function exibirMensagem () {
    let nome = document.getElementById("palavra1").value; /*tras a tag que tem o id*/
    let nomes = document.getElementById("palavra2").value;
    let mensagem = nome && nomes? `palavras concatenadas: ${nome} ${nomes}` : '';
    

    /** OU
     * if(nome && nomes){
     * palavras concatenadas = `${nome} ${nomes}por uma crase no final
     * (`palavras concatenadas por uma crase aqui no final)document.getElementById.innerHTML = palavras concatenadas}
     */
    



    document.getElementById("mensagem").innerHTML = mensagem; 
    
    
    
    
    console.log(mensagem);
}