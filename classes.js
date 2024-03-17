class Aluno{
    constructor(nome, login, RA){
        this.nome = nome;
        this.login = login;
        this.RA = RA;
    }
}

class Turma extends Aluno{
    #codigo;
    #nota;
    constructor(nome, login, RA, codigo, nota){
        super(nome, login, RA);
        this.#codigo = codigo;
        this.#nota = nota;
    }
    aprovado(){
        if(this.#nota >= 6) return true;
        else return false;
    }
}

class turmaPresencial extends Turma{
    #frequencia;
    constructor(nome, login, RA, codigo, nota, frequencia){
        super(nome, login, RA, codigo, nota);
        this.#frequencia = frequencia;
    }
    aprovado(){
        if(this.#frequencia >= 75) return true
        else return false
    }
}
module.exports = {Aluno, Turma, turmaPresencial}