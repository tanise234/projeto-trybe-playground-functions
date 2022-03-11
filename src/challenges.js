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
  if (cat1 < cat2) {
    return 'cat1';
  } else if (cat1 > cat2) {
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
  for (let index in string) {
    string = string.replace('a',1);
    string = string.replace('e',2);
    string = string.replace('i',3);
    string = string.replace('o',4);
    string = string.replace('u',5);
  }
  return string;
} 
function decode(string) {
  for (let index in string) {
    string = string.replace('1','a');
    string = string.replace('2','e');
    string = string.replace('3','i');
    string = string.replace('4','o');
    string = string.replace('5','u');
  }
  return string;
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
      }
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
