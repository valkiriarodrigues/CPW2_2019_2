console.log("Olá IFMS"); // IMPRIME UMA MENSSAGEM NO CONSOLE DO BROWSER  // usa só um linha
/**
 * comentarios multilinha  barra e duas estrelinhas/** *
 */

//alert("Christian Asaffe"); // janela de alerta é intruzivo não usar esse ALERT

var mensagem= document.getElementById("mensagem"); //pega o span cujo id é igual 'menssagem' e coloca na variavel menssagem( usando para a arvore DOM)

mensagem.innerHTML="Valkiria Rodrigues"; //coloca um texto dentro do span


var paragrafo=document.createElement("p"); //injeta um paragrafo dentro da div conteiner criando a tag de paragrafo e salva na variavel p(paragrafo)

paragrafo.innerHTML=` colocar crase pra quebrar um texto em linhas 
Lorem ipsum dolor sit amet, 
consectetur adipiscing elit.
Aenean vitae suscipit mi, vitae consectetur massa. 
In aliquam quam accumsan varius viverra. Praesent eget molestie lacus, ut aliquet enim.
Vestibulum congue nunc quis sem lacinia, et scelerisque nibh elementum. Curabitur eu odio arcu.
Sed fringilla lacus id eros vulputate, a imperdiet lectus pretium. Proin laoreet laoreet est eu suscipit.
Quisque ultricies, ex condimentum lobortis venenatis, sapien lectus ornare felis, vulputate efficitur mauris ipsum ac quam. Vivamus gravida,
dolor accumsan pretium porta, arcu nulla gravida felis, non rhoncus nisl metus eu tortor. Nunc eu nibh sed lorem malesuada pharetra et vel dui. Praesent
lobortis malesuada sapien quis tristique. Phasellus a dolor mollis, ornare magna sit amet, efficitur est.
Foram gerados 1 parágrafos, 116 palavras e 797 bytes de Lorem Ipsum
`
// coloca a crase pra quebrar o texto em linhas

var conteiner=document.getElementById("conteiner");
conteiner.appendChild(paragrafo); // anexa a tag de paragrafo dentro da div conteiner
