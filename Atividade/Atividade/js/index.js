function verificaPalindromo(){

    var mensagem = ''; // variavel mensagem
    let palavra = document.getElementById("palavra").value;
    palavra=palavra.toLowerCase();// deixa tudo em minusculo
        while(palavra.indexOf(" ") != -1){ //executar enquanto houver espaço
        palavra = palavra.replace('\n',''); // tira pulo de linha
        palavra = palavra.replace(",","");// tirar virgula
        palavra = palavra.replace(".","");//TIRA PONTO
        palavra = palavra.normalize('NFD').replace(/([\u0300-\u036f]|[^0-9a-zA-Z])/g,''); // tira espaço
        //palavra = palavra.replace('[áàãâäéèêëíìîïóòõôöúùûüçÁÀÃÂÄÉÈÊËÍÌÎÏÓÒÕÖÔÚÙÛÜÇ]','[aaaaaeeeeiiiiooooouuuucAAAAAEEEEIIIIOOOOOUUUUC]'); // tira espaço
        palavra = palavra.trim(); // tira espaço no começo e no final de cada string
        }
    

    palavraReversa = palavra.split('').reverse().join(''); // split:divide reverse:inverte join: junta tudo de novo
    
    if(palavra.length!=0){ //length: conta quantos caracter tem na palavra
        if(palavra==palavraReversa){
            mensagem = `É palíndromo: ${palavra}  ${palavraReversa}`; //${} diz que é uma variavel
        }else{
        mensagem = `Não é palíndromo: ${palavra}  ${palavraReversa}`;
        }   
    }else{
        mensagem = '';
    }
    document.getElementById("mensagem").innerHTML = mensagem;  // document. busca um elemento pelo id no html e atribui uma variavel
}

function contido(){ 

    var mensagem = '';
    let palavra1 = document.getElementById("palavra1").value;
    let palavra2 = document.getElementById("palavra2").value;
    
    if(palavra1 && palavra2){
        if(palavra1.includes(palavra2)){ //includes verifica se esta incluso
            mensagem = `Está contido: ${palavra1}  ${palavra2}`; 
        }else{
        mensagem = `Não está contido: ${palavra1}  ${palavra2}`;
        }   
    }else{
        mensagem = '';
    }
    document.getElementById("mensagem").innerHTML = mensagem; // iserir a mensagem
}