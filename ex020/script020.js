function calcular () {
    let mes = prompt('Digite o mês por extenso. (Ex: Janeiro)')
    let res = document.getElementById('resultado')
    let estacao

switch (mes.toUpperCase()) { // A estrutura switch basicamente permite você testar valores dentro de uma variável ou expressão. Ela é compatível apenas com números inteiros e strings
    case 'JANEIRO':  case 'FEVEREIRO':  case 'MARÇO':
        estacao = 'INVERNO'
        break // O break é obrigatório em cada case. Se não for colocado, acontecerá a execução de vários comandos indesejados de outros cases
    case 'ABRIL':  case 'MAIO':  case 'JUNHO':
        estacao =   'PRIMAVERA'
        break
    case 'JULHO':  case 'AGOSTO':  case 'SETEMBRO':
        estacao = 'VERÃO'
        break 
    case 'OUTUBRO':  case 'NOVEMBRO':  case 'DEZEMBRO':
        estacao =   'OUTONO'
        break
    default:
        estacao = 'INDEFINIDA'
        break
}
res.innerHTML += `<p>No mês ${mes} a estação é ${estacao}.</p>`

}