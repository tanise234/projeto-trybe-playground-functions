// Desafio 11
function generatePhoneNumber(array) {
  // verificar a quantidade de dígitos
  if (array.length !== 11) {
    return 'Array com tamanho incorreto.';
  }

  // validar os dígitos
  for (let index in array) {
    if (array[index] < 0 || array[index] > 9) {
      return 'não é possível gerar um número de telefone com esses valores';
    }
  }

  // verificar repetição
  
  // agrupar os dígitos
  let parte1 = [array[0], array[1]];
  let parte2 = [array[2], array[3], array[4], array[5], array[6]];
  let parte3 = [array[7], array[8], array[9], array[10]];
  let phoneNumber = '(' + parte1.join('') + ') ' + parte2.join('') + '-' + parte3.join('');

  return phoneNumber;
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  // menor que a soma
  let sumAB = lineA + lineB;
  let sumAC = lineA + lineC;
  let sumBC = lineB + lineC;
  let cond1 = (lineA < sumBC && lineB < sumAC && lineC < sumAB);

  // maior que a diferença
  let difAB = Math.abs(lineA - lineB);
  let difAC = Math.abs(lineA - lineC);
  let difBC = Math.abs(lineB - lineC);
  let cond2 = (lineA > difBC && lineB > difAC && lineC > difAB);

  if (cond1 && cond2){
    return true;
  } else {
    return false;
  }
}

// Desafio 13
function hydrate() {
  // seu código aqui
}

module.exports = {
  generatePhoneNumber,
  hydrate,
  triangleCheck,
};
