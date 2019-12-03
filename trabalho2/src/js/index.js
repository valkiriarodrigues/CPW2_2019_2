
var lista = [{descricao:'Abacaxi',quantidade: 3},
{descricao:'Absorvente',quantidade: 4},
{descricao:'Achocolatado em pó',quantidade: 5}];

//colocando os itens para escolha
var itens = [{descricao:'Abacaxi',unidade: 'un'},
{descricao:'Absorvente',unidade: 'pct'},
{descricao:'Achocolatado em pó',unidade: 'kg'},
{descricao:'Açucar',unidade: 'kg'},
{descricao:'água Sanitária',unidade: 'Litro'},
{descricao:'Alcaparras',unidade: 'un'},
{descricao:'álcool em Gel',unidade: 'un'},
{descricao:'Alface',unidade: 'Maço'},
{descricao:'Alho',unidade: 'kg'},
{descricao:'Arroz',unidade: 'kg'},
{descricao:'Azeite de Oliva',unidade: 'un'},
{descricao:'Azeitona',unidade: 'kg'},
{descricao:'Banana',unidade: 'kg'},
{descricao:'Batata',unidade: 'kg'},
{descricao:'Batata Palha',unidade: 'pct'},
{descricao:'Bolacha',unidade: 'pct'},
{descricao:'café',unidade: 'kg'},
{descricao:'Calabresa',unidade: 'kg'},
{descricao:'Carne Bovina',unidade: 'kg'},
{descricao:'Carne Suina',unidade: 'kg'},
{descricao:'Carvão',unidade: 'kg'},
{descricao:'Cerveja',unidade: 'un'},
{descricao:'Cebola',unidade: 'kg'},
{descricao:'Cenoura',unidade: 'kg'},
{descricao:'Chá',unidade: 'cx'},
{descricao:'Cheiro-Verde',unidade: 'Maço'},
{descricao:'Chocolate',unidade: 'kg'},
{descricao:'Condicionador',unidade: 'un'},
{descricao:'Copo descartavel',unidade: 'un'},
{descricao:'Coxa sobre Coxa',unidade: 'kg'},
{descricao:'Creme de leite',unidade: 'un'},
{descricao:'Iogurte',unidade: 'un'},
{descricao:'Desinfetante',unidade: 'litro'},
{descricao:'Erva Tereré',unidade: 'kg'},
{descricao:'Ervilha em conserva',unidade: 'kg'},
{descricao:'Escova de dente',unidade: 'un'},
{descricao:'extrato de tomate',unidade: 'kg'},
{descricao:'Farinha de Mandioca',unidade: 'kg'},
{descricao:'Fermento Quimico',unidade: 'un'},
{descricao:'Fio Dental',unidade: 'un'},
{descricao:'Fósforo',unidade: 'cx'},
{descricao:'Frango',unidade: 'kg'},
{descricao:'Fubá',unidade: 'kg'},
{descricao:'Gel de cabelo',unidade: 'un'},
{descricao:'Hot Pocket',unidade: 'un'},
{descricao:'Laranja',unidade: 'kg'},
{descricao:'Leite',unidade: 'litro'},
{descricao:'Leite condensado',unidade: 'cx'},
{descricao:'Lenha',unidade: 'kg'},
{descricao:'Limão',unidade: 'kg'},
{descricao:'Luva de Latex',unidade: 'cx'},
{descricao:'Maçã',unidade: 'kg'},
{descricao:'Macarrão',unidade: 'kg'},
{descricao:'Macarrão instantaneo',unidade: 'un'},
{descricao:'Mamão',unidade: 'kg'},
{descricao:'Manteiga',unidade: 'kg'},
{descricao:'Margarina',unidade: 'kg'},
{descricao:'Melancia',unidade: 'kg'},
{descricao:'Melão',unidade: 'kg'},
{descricao:'Milho verde em conserva',unidade: 'kg'},
{descricao:'Mistura para bolo',unidade: 'pct'},
{descricao:'Molho de pimenta',unidade: 'litro'},
{descricao:'molho de Soja',unidade: 'litro'},
{descricao:'Mussarela',unidade: 'kg'},
{descricao:'Oleo de soja',unidade: 'un'},
{descricao:'Ovos',unidade: 'dz'},
{descricao:'Pá de lixo',unidade: 'un'},
{descricao:'Palmito',unidade: 'kg'},
{descricao:'Pano de chão',unidade: 'un'},
{descricao:'Pão',unidade: 'kg'},
{descricao:'Papel Aluminio',unidade: 'un'},
{descricao:'papel Higiênico',unidade: 'pct'},
{descricao:'Papel Manteiga',unidade: 'un'},
{descricao:'Peixe',unidade: 'kg'},
{descricao:'pêra',unidade: 'kg'},
{descricao:'pimenta do reino',unidade: 'g'},
{descricao:'pimentão',unidade: 'kg'},
{descricao:'Milho de pipoca',unidade: 'kg'},
{descricao:'Plástico filme',unidade: 'un'},
{descricao:'presunto',unidade: 'kg'},
{descricao:'rabanete',unidade: 'kg'},
{descricao:'refrigerante',unidade: 'un'},
{descricao:'rodo',unidade: 'un'},
{descricao:'rucula',unidade: 'maço'},
{descricao:'sabão em barra',unidade: 'kg'},
{descricao:'sabão em pó',unidade: 'kg'},
{descricao:'sabonete',unidade: 'un'},
{descricao:'saco de lixo',unidade: 'pct'},
{descricao:'sal',unidade: 'kg'},
{descricao:'shampoo',unidade: 'un'},
{descricao:'Steak de frango',unidade: 'un'},
{descricao:'tomate',unidade: 'kg'},
{descricao:'farinha de trigo',unidade: 'kg'},
{descricao:'uva',unidade: 'kg'},
{descricao:'vassoura',unidade: 'un'},
{descricao:'vinagre',unidade: 'un'},
{descricao:'vinho',unidade: 'un'},

];








let aparecerItens = document.getElementById('aparecerItens');    
for(let i = 0; i < lista.length; i++) {
    let p = document.createElement('p');
    p.innerText = lista[i].quantidade + ' UM de ' + lista[i].descricao;

    aparecerItens.appendChild(p);
}






//selecionando os itens para compra

function  selecionarItem(){
    var select = document.getElementById("item");

    for(var i = 0; i <itens.length; i++){
        var opcao = document.createElement("option");
        opcao.text = itens[i].descricao;
        opcao.value = i;
        select.appendChild(opcao);
    }
}
selecionarItem();

// colocando a unidade dos itens(un, kg, litro, pacote)

function colocarUnidade(){ //colocando o valor da unidade na tela
    var indice = document.getElementById("item").value;//pegando o indice
    document.getElementById('unidade').innerText=itens[indice].unidade;

}
colocarUnidade();

 function montarLista(){
     let item= document.getElementById('item').value;//pegando o valor da tag
     let aparecerItens=document.getElementById('aparecerItens');//pegou o id da div onde vai ser inseridas
     let paragrafo=document.createElement('aparecerItens'); // criando paragrafo dinamicamente
     paragrafo.innerText=item;// jogando o texto do input dentro do paragrafo qyue eu criei
    aparecerItens.appendChild(paragrafo);//adicionando paragrafo dentro da div resposta

 }
function montarLista() {
 
/**
 *    let aparecerItens = document.getElementById('aparecerItens');

    for(let i = 0; i < lista.length; i++) {
        let p = document.createElement('p');
        p.innerText = lista[i].quantidade + ' UM de ' + lista[i].descricao;

        aparecerItens.appendChild(p);
    }
};
 */

//criar a lista dentro de uma ul e depois dentro de uma li(todos os itens).. para a aprte da minha lista



