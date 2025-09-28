console.assert("Legolas" > "Gimli");
console.clear();
console.dir(window);
console.dirxml(document.body);

const marvel = ['Spider Man', 'Iron Man', 'Capitan America', 'Lobezno'];
console.group('Superheroes de Marvel');
marvel.forEach(superhero => console.log(superhero));
console.groupEnd();


var Puntaje; // var permite redeclarar valores existentes
let Score; //let no permite redeclarar valores ya existentes

Puntaje = 4;
Score = 10;

var Puntaje = 165;
let TotalScore = Puntaje;

console.log(Puntaje);
var Puntaje = 140;
console.log(Puntaje);

console.log(TotalScore);
let FinalScore = 125;
console.log(FinalScore);


const AnyProblem = 45;
const ThisProblem = 3;
const AlmostFailed = 2;
console.log(AnyProblem, ThisProblem, AlmostFailed);

const variable = 15;
console.log(typeof variable);
const Products = ['Pizza', 'macarons'];
console.log(Products instanceof Array);
console.log(Products instanceof Object);


console.log(typeof undefined);

console.log(typeof ValorKnown);
console.log(typeof null);
console.log(typeof { key: 3 });
console.log(typeof [15, 4]);
console.log(typeof new Date());

console.log(true);
console.log(false);
console.log(typeof new Boolean(true));

console.log(typeof "Hola mi nombre es lourdes")

console.log(typeof function () { });


console.log(typeof 1);

console.log(typeof NaN);
console.log(typeof Infinity);

console.log(typeof Symbol("Hola mundo"));

const suma = 15 + 25;
console.log(suma);

var operacion, total;

operacion = 15 + 25;
total = Math.round(operacion / 15 * 24);
console.log(total);

const informacion = "FIRE " + "WORKS";
console.log(informacion);

const sumaStringNumero = 25 + "1965";
console.log(sumaStringNumero);

let inicio = +5;
const sumaYAsigna = ++inicio;
const asignaYsuma = inicio++;
const restaYAsigna = --inicio;
const asignaYresta = inicio--;
console.log(sumaYAsigna);
console.log(asignaYsuma);
console.log(inicio);

let x = 13;
let y = 24;
let z = 54;

console.log(x = y);
console.log(x += z);
console.log(x *= y)

const Save = !true;

const cherto = true && true;
let noEcherto = false && true;
noEcherto = false && false;
noEcherto = true && false;