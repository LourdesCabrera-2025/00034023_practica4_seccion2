console.assert("Legolas" > "Gimli");
console.clear();
console.dir(window);
console.dirxml(document.body);

const marvel = ['Spider Man', 'Iron Man', 'Capitan America', 'Lobezno'];
console.group('Superheroes de Marvel');
marvel.forEach(superhero => console.log(superhero));
console.groupEnd();

var miVariable;
let miOtraVariable;

miVariable = 2;
miOtraVariable = 2;

var miVariable = 42;
let miOtraVariable2 = miVariable;
/** se declara como miOtraVariable2 porque de lo contrario 
 * da Uncaught Error debido al reciclaje de variables en donde 
 * sabemos no se puede definir una variable ya existente
*/
console.log(miVariable);
var miVariable = 2;
console.log(miVariable);

console.log(miOtraVariable);
