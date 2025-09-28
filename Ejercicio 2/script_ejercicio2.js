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
const Products = ['Pizza' , 'macarons'];
console.log(Products instanceof Array);
console.log(Products instanceof Object);


console.log (typeof undefined);

console.log(typeof ValorKnown);
console.log(typeof null);
console.log(typeof {key: 3});
console.log(typeof [15,4]);
console.log(typeof new Date());
