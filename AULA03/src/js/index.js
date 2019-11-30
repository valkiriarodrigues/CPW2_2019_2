/**
 * nosso banco de dados fake(in memory DB)
 */

 //cria o objeto sidney
 let sidney = new Contato('Sidney Roberto','(67) 99999-9999', 'sidney@email.com','29/02/2003' );
 let lucas = new Contato('Lucas Negri', '(67) 99898-9595', 'lucas@gmail.com', '54/85/1997' );
 let valkiria = new Contato('Valkira Rodrigues', '(67) 98989-7856', 'valkiria@hotmail', '15/87/1996');
 let claudia = new Contato ('Claudia Rodrigues', '(67) 99898-7545', 'claudia@gmail.com', '30/04/1996');
 let asaffe = new Contato ('Christian Asaffe', '(67) 998745632', 'asaffe@gmail.com', '24/12/2015')

var contatos = [sidney, lucas, valkiria, claudia, asaffe];

 //instancia o objeto da contato view

 var contatoView = new ContatoView(contatos);







 

 
 
