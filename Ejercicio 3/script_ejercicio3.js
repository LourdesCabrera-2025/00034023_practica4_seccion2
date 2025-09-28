console.assert("Legolas" > "Gimli");
console.clear();
console.dir(window);
console.dirxml(document.body);

const marvel = ['Spider Man', 'Iron Man', 'Capitan America', 'Lobezno'];
console.group('Superheroes de Marvel');
marvel.forEach(superhero=> console.log(superhero));
console.groupEnd();

function ordenar(arr) {
    const nuevoArray = [...arr]
    for (let i = 0; i< nuevoArray.length; i++) {
        for(let j = 0; j < nuevoArray.length - i - 1; j++) {
            if(nuevoArray[j] > nuevoArray[j+1]) {
                let temporal = nuevoArray[j];
                nuevoArray[j] = nuevoArray[j+1];
                nuevoArray[j+1] = temporal;
            }
        }
    }
    return nuevoArray;
}



const Grades = [105, 95, 35, 237, 756, 345, 200 , 164];
const ordenarNum = ordenar(Grades);

console.log(ordenarNum);

let Numeros = [];

function procesarDatos(arr) {
    console.log("array ingresado : ", arr);
}

while (true) {
    let valor = prompt("Ingresa un valor o escribe fin para terminar ")

    if(valor === null || valor.toLowerCase() === "fin") break;
    let numero = Number(valor);
    if(!isNaN(numero) && numero >= 0) {
        Numeros.push(numero)
    } else {
        console.log("Ingrese solo numeros enteros positivos")
    }
}

procesarDatos(Numeros);

function esPar (arr) {
    let pares = [];
    for(let i=0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            pares.push(arr[i]);
        }
    }
    return pares;
}

console.log("Numeros pares: " , esPar(Numeros));
