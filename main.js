alert('Insira a nota das ultimas provas: ');
    let nome =(prompt('Insira a disciplina'));
    let n1 = Number(prompt('1° Prova: '));
    let n2 = Number(prompt('2° Prova: '));
    let n3 = Number(prompt('3° Prova: '));
    let n4 = Number(prompt('4° Prova: '));
    let n5 = Number(prompt('5° Prova: '));
let m = (n1+n2+n3+n4+n5)/5;
alert(`Média das provas de ${nome}: ${m}`)
