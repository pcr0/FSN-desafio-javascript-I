// Base a ser utilizada
const alunosDaEscola=[{nome:"Henrique",notas:[],cursos:[],faltas:5},
{nome:"Edson",notas:[],cursos:[],faltas:2},
{nome:"Bruno",notas:[10,9.8,9.6],cursos:[],faltas:6},
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

function listarAlunos() {
    let i = 0
    console.log('')
    alunosDaEscola.forEach( function(e) {
        console.log(`Aluno ${(i + 1)}`)
        exibirAluno(e)
        console.log('')
        i++
    })
}

function buscarAluno(nome){
    let aluno = alunosDaEscola[alunosDaEscola.map(function(aluno) { return aluno.nome; }).indexOf(nome)]
    if (aluno != undefined) {
        console.log(`Aluno ${nome} encontrado.`)
        return aluno
    }
    else
    {
        console.log(`Nome não cadastrado.`)
    }
}

function exibirAluno(aluno){
    console.log('')
    console.log(`Nome: ${aluno.nome}`)
    let i = 1
    if (aluno.notas.length > 0) {
        for (let nota in aluno.notas) {
            console.log(`Nota ${i}: ${aluno.notas[nota]}`)
            i++
        }
    }
    else
    {
        console.log(`Aluno sem notas cadastradas.`)
    }       
    i = 1 
    if (aluno.cursos.length > 0 ) {
        for (let curso in aluno.cursos) {
            console.log(`Curso ${i}:`)
            console.log(`Nome: ${aluno.cursos[curso].nomeDoCurso}`)
            console.log(`Data de matrícula: ${aluno.cursos[curso].dataMatricula}`)
            i++
        } 
    }       
    else 
    {
        console.log(`Aluno não inscrito em cursos.`)
    }
    console.log(`Número de faltas: ${aluno.faltas}`)
    console.log('')
}

function matricularAluno(aluno, curso){
    console.log(`retorna aluno matriculado.`)

}

function aplicarFalta(aluno){
    aluno.faltas++
    console.log(`Falta aplicada ao aluno ${aluno.nome}. Total de faltas: ${aluno.faltas}`)
}
    
function aplicarNota(aluno, nota){ // função modificada para manter a declaração da nota a ser aplicada, fora deste escopo
    aluno.notas.push(nota)
    console.log(`Nota ${nota} aplicada ao aluno ${aluno.nome}.`)
}
  
function aprovarAluno(aluno){
    if ((aluno.faltas <= 3) && ((aluno.notas.reduce(function(total, e) { return total + e }) / aluno.notas.length) >= 7)){
        console.log(`Aluno aprovado!`)
    }
    else
    {
        console.log(`Aluno reprovado!`)
    }
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
            listarAlunos()
            rl.close()
            break
        case '3':
            rl.setPrompt('Opção Buscar um aluno selecionada. Digite o nome do aluno: ')
            rl.prompt()
            rl.on('line', userInput => {
                console.log('Retorno das informações do aluno:')
                exibirAluno(buscarAluno(userInput))
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
                aplicarFalta(buscarAluno(userInput))
                rl.close()
            })
            break
        case '6':
            rl.setPrompt('Opção Aplicar Nota a um aluno selecionada. Digite o nome do aluno: ')
            rl.prompt()
            rl.on('line', userInput => {
                aplicarNota(buscarAluno(userInput),7) // chamada da função alterada
                rl.close()
            })
            break
        case '7':
            rl.setPrompt('Opção Aprovar um aluno selecionada. Digite o nome do aluno: ')
            rl.prompt()
            rl.on('line', userInput => {
                aprovarAluno(buscarAluno(userInput))
                rl.close()
            })
            break
        default:
            console.log('Opção inválida')
    }
})

