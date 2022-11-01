/*let n1 = Number(prompt('Manda uma nota de 0 a 10: '));

if (n1 == 0) Nota0();
else if (n1 == 10) Nota10();

function Nota10()
{
    document.write('Obrigado pela nota! ');
}

function Nota0()
{
    document.write('Agradeço o feedback, vou melhorar eu prometo!')
}
*/

const num = ['pao', 'batata', 'arroz'];

document.write(num.length);

console.log(num);

num.length = 7;

const n1 = ['telhado', 'madeira', 'pera'];

n1.push('pedra')//adiciona item final array
n1.unshift('limao')//adiciona item no inicio do array
n1.pop('')//remove item final array
n1.shift('')//remove item no inicio do array
