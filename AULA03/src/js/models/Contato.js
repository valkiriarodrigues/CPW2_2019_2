//criando classe
class Contato{
    /**
     * ao contruir um novo objeto de contato devem ser informados 
     * o nome, telefone, e-,aiç e tada de nascimento do novo contato
     * @param {*} nome Nome do contato
     * @param {*} telefone telefone do contato
     * @param {*} email email do contato
     * @param {*} dataNascimento datanasc do contato
     */

    constructor(nome, telefone, email, dataNascimento){
        //estou me referindo ao nome deste objeto que esta sendo construido aqui(this)
        this.nome  = nome;
        this.telefone =telefone;
        this.email = email;
        this.dataNascimento = dataNascimento;
    }
}