
function somar() {
    window.alert('Bem vindo(a) ao meu site!');
    let numero = Number(window.prompt('Digite um número: '));
    let numero2 = Number(window.prompt('Digite outro número: '));
    soma = numero + numero2
    let res = document.getElementById('resultado');
    res.innerHTML = `<p>A soma de ${numero} e ${numero2} é igual a ${soma}.`
}