function calcular() {
    window.alert('Bem vindo(a) ao meu site!');
    let numero = window.prompt('Digite um número: ');
    let res = document.getElementById('resultado');
    res.innerHTML = `<p>O dobro de ${numero} é ${numero * 2} e a metade é ${numero / 2}.`
}