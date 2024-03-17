const {Aluno, Turma, turmaPresencial} = require('./classes');
const http = require('http');


let aluno = new Aluno('Matheus Kodi', 'mathkodi', '2503557');
let turma = new Turma('Matheus Kodi', 'math.kodi', '2503557', 'AS64B', '10');
let turmapresencial = new turmaPresencial('Matheus Kodi', 'math.kodi', '2503557', 'AS64B', '10', '90');

http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-type', 'application/json');
    res.end(JSON.stringify({
        "Aluno": aluno,
        "Turma": turma,
        "Turma Presencial": turmapresencial,
        "Aprovado": turma.aprovado(),
        "Frequencia": turmapresencial.aprovado()
    }));
}).listen(3001, ()=> {
    console.log(" 3001 ");
});