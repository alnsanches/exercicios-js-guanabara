
function media() {
    let nome = window.prompt('Qual o nome do aluno?');
    let nota1 = Number(window.prompt('Digite a primeira nota: '));
    let nota2 = Number(window.prompt('Digite a segunda nota: '));
    media = (nota1 + nota2) / 2

    let res = document.getElementById('resultado');
    res.innerHTML = `<p>Calculando a nota de ${nome}.</p>`;
    res.innerHTML += `<p>As notas foram ${nota1} e ${nota2}.</p>`;
    res.innerHTML += `<p>A média final será <mark>${media}</mark>.</p>`;
}