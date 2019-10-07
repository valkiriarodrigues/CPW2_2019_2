let pixels = [];
let altura = 40;
let largura = 40;

function inicializarPixels(){
    let tamanho = altura * largura;
    pixels= new Array(tamanho);
    for(let i=0; i<tamanho; i++){ // trabalhar com altura e largura do fogo
        pixels[i]=0;
    }
    renderizarCanvas();
}

function renderizarCanvas(){ // pintar o fogo na tela
    let tabela = document.createElement("table");
    for(let l=0; l<altura; l++){
        let linha=document.createElement("tr");
        for(let c=0; c < largura; c++){ // c =celula controla as colunas
            let celula=document.createElement("td");
            let indice = (largura * l) + c;
            let valorCor = pixels[indice];
            let cor = paletaCores[valorCor];
            let corStr = `rgb(${cor.r},${cor.g},${cor.b})`;
            celula.style.backgroundColor = corStr;
            linha.appendChild(celula);
        }
        tabela.appendChild(linha);

    }
    let canvas = document.getElementById("canvas");
    canvas.innerHTML= '';
    canvas.appendChild(tabela);
}
function acenderFogo(){
    let tamanho= altura*largura;
    let inicial= tamanho-largura;
    for(let i = inicial; i< tamanho; i++){
        pixels[i]=36;
    }

    renderizarCanvas();
}


function propagarFogo(){
    for(let l= 0; l< altura-1; l++){
        for(let c=0; c<largura; c++){
            let indice= (largura*l) +c;
            let corPixelAbaixo=pixels[indice+largura];
            let decremento= Math.floor(Math.random()*3);
            indice =(indice-decremento) >=0
            ?indice-decremento
            :indice;
            pixels[indice] = (corPixelAbaixo-decremento)>=0
            ? corPixelAbaixo-decremento
            :0;
        }
    }
    renderizarCanvas();

}

function iniciar(){
    inicializarPixels();
    acenderFogo();
    setInterval(propagarFogo,50);
}

iniciar();




