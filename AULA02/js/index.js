 

function exibirMensagem () {
    let nome = document.getElementById("nome").value; //recuperar a teg(exemplo um nome que foi digitado) 
    let mensagem = nome? `Olá, ${nome}!` : ''; //para aparecer uma mensagem para o usuario/não ficar gravado mensagem no campo de digitação
    document.getElementById("mensagem").innerHTML = mensagem; // jogar na div onde a msg tem que ser exibida
    



    console.log(nome); // aparecer no console
    
}