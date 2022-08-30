function calcular() {
    let numero1 = Number(window.prompt('Digite um número: '));
    let numero2 = Number(window.prompt('Digite outro número: '));

    let res = document.getElementById('resultado');
    if (numero1 > numero2) {
        res.innerHTML = `<p>Entre ${numero1} e ${numero2}, o maior valor é ${numero1}.</p>`
    } else if (numero1 < numero2) {
        res.innerHTML = `<p>Entre ${numero2} e ${numero1}, o maior valor é ${numero2}.</p>`
    } else {
        res.innerHTML = `<p>Entre ${numero1} e ${numero2}, ambos são IGUAIS.</p>`
    }
    

}