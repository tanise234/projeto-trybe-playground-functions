// Desafio 1
function compareTrue(bool1, bool2) {
  if (bool1 === true && bool2 === true) {
    return true;
  } else {
    return false;
  }
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(string) {
  return string.split(' ');
}

// Desafio 4
function concatName(array) {
  return array[array.length - 1] + ', ' + array[0];
}

// Desafio 5
function footballPoints(wins, ties) {
  return wins * 3 + ties * 1;
}

// Desafio 6
function highestCount(array) {
  // encontrar o maior valor
  let maior = array[0];
  for (let index = 1; index < array.length; index += 1) {
    if (maior < array[index]) {
      maior = array[index];
    }
  }

  // calcular as repetições
  let count = 0;
  for (let index = 0; index < array.length; index += 1) {
    if (maior === array[index]) {
      count += 1;
    }
  }

  return count;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  if (Math.abs(cat1 - mouse) < Math.abs(cat2 - mouse)) {
    return 'cat1';
  } else if (Math.abs(cat1 - mouse) > Math.abs(cat2 - mouse)) {
    return 'cat2';
  } else {
    return 'os gatos trombam e o rato foge';
  }
}

// Desafio 8
function fizzBuzz(array) {
  for (let index in array) {
    if (array[index] % 15 === 0) {
      array[index] = 'fizzBuzz';
    } else if (array[index] % 3 === 0) {
      array[index] = 'fizz';
    } else if (array[index] % 5 === 0) {
      array[index] = 'buzz';
    } else {
      array[index] = 'bug!';
    }
  }
  return array;
}

// Desafio 9
function encode(string) {
  let aux = [];
  for (let index in string) {
    switch (string[index]) {
      case 'a':
        aux[index] = '1';
        break;
      case 'e':
        aux[index] = '2';
        break;
      case 'i':
        aux[index] = '3';
        break;
      case 'o':
        aux[index] = '4';
        break;
      case 'u':
        aux[index] = '5';
        break;

      default:
        aux[index] = string[index];
        break;
    }
  }
  return aux.join('');
}
function decode(string) {
  let aux = [];
  for (let index in string) {
    switch (string[index]) {
      case '1':
        aux[index] = 'a';
        break;
      case '2':
        aux[index] = 'e';
        break;
      case '3':
        aux[index] = 'i';
        break;
      case '4':
        aux[index] = 'o';
        break;
      case '5':
        aux[index] = 'u';
        break;

      default:
        aux[index] = string[index];
        break;
    }
  }
  return aux.join('');
}

// Desafio 10
function techList(array, name) {
  if (array.length !== 0) {
    // ordenar o array
    let aux = array.sort();
    for (let index = 0; index < aux.length; index += 1) {
      // criar os objetos
      array[index] = {
        tech: aux[index],
        name: name
      };
    }
    return array;
  } else {
    return 'Vazio!';
  }
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
  techList,
};
