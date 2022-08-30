function calcular () {
    let numero1 = Number(prompt('Primeiro número: '))
    let numero2 = Number(prompt('Segundo número: '))
    let operacao = Number(prompt('Valores informados: ${numero1} e ${numero2}. \nO que vamos fazer? \n[1] Somar \n[2] Subtrair \n[3] Multiplicar \n[4] Dividir'))

let res = document.getElementById('resultado')

switch (operacao) { // A estrutura switch basicamente permite você testar valores dentro de uma variável ou expressão. Ela é compatível apenas com números inteiros e strings
    case 1:
        res.innerHTML += `<p>${numero1} + ${numero2} = <strong>${numero1 + numero2}</strong></p>`
        break // O break é obrigatório em cada case. Se não for colocado, acontecerá a execução de vários comandos indesejados de outros cases
    case 2:
        res.innerHTML += `<p>${numero1} - ${numero2} = <strong>${numero1 - numero2}</strong></p>`
        break
    case 3:
        res.innerHTML += `<p>${numero1} x ${numero2} = <strong>${numero1 * numero2}</strong></p>`
        break
    case 4:
        res.innerHTML += `<p>${numero1} / ${numero2} = <strong>${(numero1 / numero2).toLocaleString('pt-BR')}</strong></p>` // O método toLocaleString() é muito útil para mostrar números de forma mais compatível com o que usamos aqui no Brasil.
        break
    default: // Se o usuário não digitar nenhum dos valores acima, vai cair aqui
        res.innerHTML += `<p>OPÇÃO DE CALCULO INVÁLIDA! Você digitou ${numero1} e ${numero2}, mas não sei o que fazer com eles. </p>`
        break
}
}