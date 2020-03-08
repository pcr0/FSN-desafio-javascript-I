// Base a ser utilizada
const alunosDaEscola=[{nome:"Henrique",notas:[],cursos:[],faltas:5},
{nome:"Edson",notas:[],cursos:[],faltas:2},
{nome:"Bruno",notas:[10,9.8,9.6],cursos:[],faltas:0},
{nome:"Guilherme",notas:[10,9.8,9.6],cursos:[{nomeDoCurso:"Full Stack",dataMatricula:new Date}],faltas:0},
{nome:"Carlos",notas:[],cursos:[],faltas:0},
{nome:"Lucca",notas:[10,9.8,9.6],cursos:[{nomeDoCurso:"UX",dataMatricula:new Date}],faltas:0}];

// add leitura de dados do console

const readline = require('readline')
const rl = readline.createInterface({input: process.stdin, output: process.stdout})

// implementação

// funções básicas


function adicionarAluno(nome){
    alunosDaEscola.push({
        nome: nome,
        notas:[],
        cursos:[],
        faltas:0
    })
    console.log(`Aluno ${nome} adicionado.`)
}

function listarAlunos(){
    let i = 0
    console.log('')
    alunosDaEscola.forEach( function(e) {
        console.log(`Aluno ${(i + 1)}`)
        buscarAluno(e.nome)
        console.log('')
        i++
    })
}

function buscarAluno(nome){
    let pos = alunosDaEscola.map(function(e) { return e.nome; }).indexOf(nome)
    console.log('')
    if (pos != -1){
        console.log(`Nome: ${alunosDaEscola[pos].nome}`)
        let i = 1
        if (alunosDaEscola[pos].notas.length > 0) {
            for (let nota in alunosDaEscola[pos].notas) {
                console.log(`Nota ${i}: ${alunosDaEscola[pos].notas[nota]}`)
                i++
            }
        }
        else
        {
            console.log(`Aluno sem notas cadastradas.`)
        }       
        i = 1 
        if (alunosDaEscola[pos].cursos.length > 0 ) {
            for (let curso in alunosDaEscola[pos].cursos) {
                console.log(`Curso ${i}:`)
                console.log(`Nome: ${alunosDaEscola[pos].cursos[curso].nomeDoCurso}`)
                console.log(`Data de matrícula: ${alunosDaEscola[pos].cursos[curso].dataMatricula}`)
                i++
            } 
        }       
        else 
        {
            console.log(`Aluno não inscrito em cursos.`)
        }
        console.log(`Número de faltas: ${alunosDaEscola[pos].faltas}`)
    }
    else
    {
        console.log(`Nome não cadastrado.`)
    }
    console.log('')
}

function matricularAluno(aluno, curso){
    console.log(`retorna aluno matriculado.`)

}

function aplicarFalta(nome){ // tentar com objeto aluno
    let pos = alunosDaEscola.map(function(e) { return e.nome; }).indexOf(nome)
    if (pos != -1){
        alunosDaEscola[pos].faltas++
        console.log(`Falta aplicada ao aluno ${alunosDaEscola[pos].nome}. Total de faltas: ${alunosDaEscola[pos].faltas}`)
    }
    else
    {
        console.log(`Nome não cadastrado.`)
    }
}
    
function aplicarNota(aluno){
    console.log(`retorna nota aplicada.`)

}
  
function aprovarAluno(aluno){
    console.log(`retorna condição do aluno.`)

}

// interface com usuário

console.log('')
console.log('------------------------------------')
console.log('-------Bem vindo Ecolé_42_Sys-------')
console.log('------------------------------------')
console.log('')
console.log('')
console.log('Para iniciar digite uma das opções abaixo:')
console.log('')
console.log('1 - Adicionar um aluno')
console.log('2 - Listar alunos')
console.log('3 - Buscar um aluno')
console.log('4 - Matricular um aluno')
console.log('5 - Aplicar Falta um aluno')
console.log('6 - Aplicar Nota um aluno')
console.log('7 - Aprovar um aluno')
console.log('------------------------------------')
let op = ''
rl.question('Função a avaliar: ', (userInput) => {
    op = userInput
    switch (op) {
        case '1':
            rl.setPrompt('Opção Adicionar um aluno selecionada. Digite o nome do aluno: ')
            rl.prompt()
            rl.on('line', userInput => {
                adicionarAluno(userInput)
                rl.close()
            })
            break
        case '2':
            console.log('Opção Listar alunos selecionada. Segue nossa turma:')
            listarAlunos(userInput)
            rl.close()
            break
        case '3':
            rl.setPrompt('Opção Buscar um aluno selecionada. Digite o nome do aluno: ')
            rl.prompt()
            rl.on('line', userInput => {
                console.log('Retorno das informações do aluno:')
                buscarAluno(userInput)
                rl.close()
            })
            break
        case '4':
            rl.setPrompt('Opção Matricular um aluno selecionada.')
            matricularAluno(userInput)
            rl.close()
            break
        case '5':
            rl.setPrompt('Opção Aplicar Falta a um aluno selecionada. Digite o nome do aluno: ')
            rl.prompt()
            rl.on('line', userInput => {
                aplicarFalta(userInput)
                rl.close()
            })
            break
        case '6':
            rl.setPrompt('Opção Aplicar Nota a um aluno selecionada. Digite o nome do aluno: ')
            aplicarNota(userInput)
            rl.close()
            break
        case '7':
            rl.setPrompt('Opção Aprovar um aluno selecionada.')
            aprovarAluno(userInput)
            rl.close()
            break
        default:
            console.log('Opção inválida')
    }
})

