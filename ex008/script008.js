
function calcular() {
    let numero = window.prompt('Digite um número: ');

    let res = document.getElementById('resultado');
    res.innerHTML = `<p>O número a ser analisado será o ${numero}.</p>`;
    res.innerHTML += `<p>O seu valor absoluto é ${Math.abs(numero)}.</p>`
    res.innerHTML += `<p>A sua parte inteira é ${Math.trunc(numero)}.</p>`
    res.innerHTML += `<p>O valor inteiro mais próximo é ${Math.round(numero)}.</p>`
    res.innerHTML += `<p>A sua raiz quadrada é ${Math.sqrt(numero)}.</p>` 
    res.innerHTML += `<p>A sua raiz cúbica é ${Math.cbrt(numero)}.</p>`        
    res.innerHTML += `<p>O valor de ${num}<sup>2</sup> é ${Math.pow(numero, 2)}.</p>`
    res.innerHTML += `<p>O valor de ${num}<sup>3</sup> é ${Math.pow(numero, 3)}.</p>`
}