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

let Crecimiento = [];
let Decrecimiento = [];

function ObtenerDatos (Crecimiento, Decrecimiento) {
    console.log("Valor ingresado : ", Crecimiento);
    console.log("Valor ingresado : ", Decrecimiento)
}
while (true) {
    let velocidadCrecimiento = prompt("Ingresa los dias de Crecimiento de la planta : ");
    let velocidadDecrecimiento = prompt("Ingresa los dias de Decrecimiento de la planta : ");

    if(velocidadCrecimiento === null || velocidadCrecimiento.toLowerCase() === "fin") break; 
    let valorCrecimiento = Number(velocidadCrecimiento);
    let valorDecrecimiento = Number(velocidadDecrecimiento);
    if(!isNaN(valorCrecimiento)  && valorCrecimiento >= 0) {
        Crecimiento.push(valorCrecimiento);
    } 
    if (!isNaN(valorDecrecimiento) && valorDecrecimiento >= 0) {
        Decrecimiento.push(valorDecrecimiento);
    } else {
        console.log("Por favor ingrese un dato valido")
    }
}

ObtenerDatos(Crecimiento, Decrecimiento);
for (let i = 0; i < Crecimiento.length && i < Decrecimiento.length; i++) {
    let dias = calcularDiasCrecimiento(Crecimiento[i], Decrecimiento[i], 10);
    console.log(`Caso ${i+1}: Crece ${Crecimiento[i]}, Decrece ${Decrecimiento[i]} → Días: ${dias}`);
}
function calcularDiasCrecimiento (velocidadCrecimiento, velocidadDecrecimiento, alturaDeseada) {
    let altura = 0;
    let dias = 0;

    while (altura < alturaDeseada) {
        altura += velocidadCrecimiento;
        dias++;
        if(altura >= alturaDeseada) {return dias}
        altura -= velocidadDecrecimiento;
    }

    return dias;
}

