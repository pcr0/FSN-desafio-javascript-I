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
    console.log(`Aluno ${nome} adicionado.`)
}

function listarAlunos(){
    console.log('..... vários alunos.....')
}

function buscarAluno(nome){
    console.log(`Aluno ${nome} retornado.`)
}

function matricularAluno(aluno, curso){
    console.log(`retorna aluno matriculado.`)

}

function aplicarFalta(aluno){
    console.log(`retorna falta aplicada.`)

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
            rl.setPrompt('Opção Listar alunos selecionada. Segue nossa turma:')
            listarAlunos(userInput)
            rl.close()
            break
        case '3':
            rl.setPrompt('Opção Buscar um aluno selecionada. Digite o nome do aluno: ')
            rl.prompt()
            rl.on('line', userInput => {
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
            rl.setPrompt('Opção Aplicar Falta a um aluno selecionada.')
            aplicarFalta(userInput)
            rl.close()
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

