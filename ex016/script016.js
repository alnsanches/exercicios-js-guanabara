function clicar() {
    let anoNascimento = Number(window.prompt('Em que ano você nasceu?'));
    let anoAtual = Number(window.prompt('Qual o ano atual?'));
    idade = anoAtual - anoNascimento

    let res = document.getElementById('resultado');
    res.innerHTML = `<p>Sua idade atual é de ${idade} anos.</p>`;

}