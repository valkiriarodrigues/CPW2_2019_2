/**utilizaremos a variavel global do 
 * jquery ($) para carregar a mascara
 * de telefone assim que a pagina for carregada
 */
$(document).ready(function() {  /*automatico quando a pagina é carregada */
    /*implementa a mascara de telefone */
    $('#telefone').mask('(00) 00000-0000'); /* recuperando o valor da variavel*/
    });