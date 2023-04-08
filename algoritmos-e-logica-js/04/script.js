let student = prompt('Qual o nome do aluno?');
let n1 = prompt('Qual a nota da primeira prova?');
let n2 = prompt('Qual a nota da segunda prova?');
let n3 = prompt('Qual a nota da terceira prova?');

let average = (Number(n1) + Number(n2) + Number(n3)) / 3;

average = average.toFixed(2);

if (average > 6) {
  alert('Parabéns, ' + student + 'Sua média foi de: ' + average);
} else {
  alert(
    student +
      ', estude para sua prova de recuperação! Sua média foi de: ' +
      average
  );
}
