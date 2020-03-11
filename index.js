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
    alunosDaEscola.forEach( aluno => {
        console.log(`Aluno ${(i + 1)}`)
        exibirAluno(aluno)
        console.log('')
        i++
    })
}

function buscarAluno(nome){
    let aluno = alunosDaEscola[alunosDaEscola.map(aluno => aluno.nome ).indexOf(nome)]
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
    if (alunosDaEscola[alunosDaEscola.indexOf(aluno)] != undefined){
        console.log('')
        console.log(`Nome: ${aluno.nome}`)
        let i = 1
        if (aluno.notas.length > 0) {
            console.log(`Notas:`)
            aluno.notas.forEach(nota => {
                console.log(`- Nota ${i}: ${nota}`)
                i++
            })
        }
        else
        {
            console.log(`Aluno sem notas cadastradas.`)
        }       
        i = 1 
        if (aluno.cursos.length > 0 ) {
            console.log(`Cursos:`)
            aluno.cursos.forEach(curso => {
                console.log(`- Curso ${i}:`)
                console.log(`  - Nome: ${curso.nomeDoCurso}`)
                console.log(`  - Data de matrícula: ${curso.dataMatricula}`)
                i++
            } )
        }       
        else 
        {
            console.log(`Aluno sem matriculas em cursos.`)
        }
        console.log(`Número de faltas: ${aluno.faltas}`)
        console.log('')
    }
    else
    {
        console.log(`Aluno não cadastrado.`)
    }
}

function matricularAluno(aluno, curso){
    if (alunosDaEscola[alunosDaEscola.indexOf(aluno)] != undefined){
        if (aluno.cursos.length > 0){
            alunosDaEscola[alunosDaEscola.indexOf(aluno)].cursos.push(curso)
            console.log(`Aluno ${alunosDaEscola[alunosDaEscola.indexOf(aluno)].nome} matriculado no curso ${curso.nomeDoCurso}.`)
        }
        else
        {
            console.log(`Aluno não matriculado em nenhum curso. Nota não foi aplicada.`)
        }
    }
    else
    {
        console.log(`Aluno não cadastrado.`)
    }
}

function aplicarFalta(aluno){
    if (alunosDaEscola[alunosDaEscola.indexOf(aluno)] != undefined){
        if (aluno.cursos.length > 0){
            alunosDaEscola[alunosDaEscola.indexOf(aluno)].faltas++
            console.log(`Falta aplicada ao aluno ${alunosDaEscola[alunosDaEscola.indexOf(aluno)].nome}. Total de faltas: ${alunosDaEscola[alunosDaEscola.indexOf(aluno)].faltas}`)
        }
        else
        {
            console.log(`Aluno não matriculado em nenhum curso. Falta não foi aplicada.`)
        }
    }
    else
    {
        console.log(`Aluno não cadastrado.`)
    }
}
    
function aplicarNota(aluno, nota){ // função modificada para manter a declaração da nota a ser aplicada, fora deste escopo
    if (alunosDaEscola[alunosDaEscola.indexOf(aluno)] != undefined){
        if (aluno.cursos.length > 0){
            alunosDaEscola[alunosDaEscola.indexOf(aluno)].notas.push(nota)
            console.log(`Nota ${nota} aplicada ao aluno ${alunosDaEscola[alunosDaEscola.indexOf(aluno)].nome}.`)
        }
        else
        {
            console.log(`Aluno não matriculado em nenhum curso. Nota não foi aplicada.`)
        }
    }
    else
    {
        console.log(`Aluno não cadastrado.`)
    }
}
  
function aprovarAluno(aluno){
    if (alunosDaEscola[alunosDaEscola.indexOf(aluno)] != undefined){
        if ((aluno.faltas <= 3) && ((aluno.notas.reduce(function(total, nota) { return total + nota }) / aluno.notas.length) >= 7) && (aluno.cursos.length > 0)){
            console.log(`Aluno aprovado!`)
        }
        else
        {
            console.log(`Aluno reprovado!`)
        }
    }
    else
    {
        console.log(`Aluno não cadastrado.`)
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
console.log('')
console.log('------------------------------------')
console.log('')
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
            matricularAluno(buscarAluno(userInput), {nomeDoCurso:"UX",dataMatricula:new Date})
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

