/* ======================================================================
  Use map() quando: é preciso traduzir/mapear todos os elementos em um array para outro conjunto de valores. Ele percorre todos os itens do array.
  ====================================================================== */

const numbers = [1, 4, 5, 9, 14, 23];

// 1• Forma
const first = numbers.map(function (elem) {
  return elem * 2
});

// console.log(first);

// 2• Forma
function doubleValues(num) {
  return num * 2;
}

const second = numbers.map(doubleValues);
// console.log(second);

// 3• Forma
const terceira = numbers.map(num => num * 2);
// console.log(terceira);

// Conversor
///////////////////////////////////////////////////////////////////////////////

const fahrenheit = [0, 32, 45, 50, 75, 80, 120];

const celsius = fahrenheit.map((elem) => Math.round((elem - 32) * 5 / 9));

// console.log(celsius);

/* ======================================================================
  Use filter() quando: é preciso remover elementos indesejados com base em alguma(s) condição(ões).

  elem => Valores do array
  index => Index de cada elemento dentro do array
  Arr => Array original Completo

  ====================================================================== */
//                       0  1  2  3  4  5   6   7  8  9
const yetAnotherArray = [2, 3, 4, 5, 4, 12, 19, 7, 2, 5];

const uniqueArray = yetAnotherArray.filter((elem, index, arr) => arr.indexOf(elem) == index);
// console.log(uniqueArray);

const number = [2, 3, 4, 5, 12, 19, 20, 21];
const pares = number.filter((elem) => elem % 2 === 0);
// console.log(pares);

/* ======================================================================
  Use reduce() quando: é preciso encontrar um valor cumulativo ou concatenado com base em elementos de todo o array.
  ====================================================================== */
const rockets = [
  { country: 'Russia', launches: 32 },
  { country: 'US', launches: 23 },
  { country: 'China', launches: 16 },
  { country: 'Europe(ESA)', launches: 7 },
  { country: 'India', launches: 4 },
  { country: 'Japan', launches: 3 }
];

const totalLaunches = rockets.reduce((elementoAnterior, elementoAtual) => elementoAnterior + elementoAtual.launches, 0);
// console.log(totalLaunches);

/* ======================================================================
  O every() retorna um valor booleano
  ====================================================================== */
// Verifica se todos os valores são maiores que 10;
const AnotherArray = [12, 25, 28, 130, 44];
const allAbove10 = AnotherArray.every(elem => elem > 10);
// console.log(allAbove10);

// Verificar se todos são maiores de idade
const tchurma = [
  { id: 12, name: "Frederico", age: 8 },
  { id: 47, name: "Francisca", age: 7 },
  { id: 77, name: "Ramon", age: 48 },
  { id: 85, name: "Zenon", age: 52 }
]

// console.log(tchurma.every(elem => elem.age >= 18));

/* ======================================================================
  Use some() quando: é preciso testar se pelo menos 1 elemento de um array passa por um teste específico (que é uma função). Em outras palavras, use some() para testar se algum elemento dentro de um array corresponde a um critério determinado.
  ====================================================================== */

// Verificar se há algum número maior que 10

function verifica(value) {
  return value > 10;
}

const a = [2, 5, 8, 11, 4];
// console.log(a.some(verifica));

// Verificar por condições em valores/objetos

const team = [
  { id: 12, name: "Topper", pillot: true },
  { id: 44, name: "Ramada", pillot: true },
  { id: 59, name: "Pete", pillot: false },
  { id: 122, name: "Kowalski", pillot: false }
]

console.log(team.some(person => person.pillot));
