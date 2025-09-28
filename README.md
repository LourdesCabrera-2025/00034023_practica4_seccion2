# Practica de Laboratorio 4


## Captura de pantalla **Ejercicio 2**
![alt text](image-2.png)

----

## _Pregunta_: ¿Qué ocurre en cada caso presentado anteriormente con los operadores y porqué JS me permite esto?

-----

### Paso 1: Declaración de variables

Se instancian las variables `X`, `Y` y `Z` utilizando `let`:

Nota: <div style = " border: 2px solid rgba(176,196,222); border-radius= 5px; background-color: rgba(176,196,222, 0.5) ;"><span style = " color: white;" > **_Si se quiere reutilizar una variable declarada previamente y reasignarle un valor, es mejor usar **`var`**, porque **`let`** no permite redeclarar la misma variable._** </span></div>

### Paso 2: Asignación de valores

Se asignan los valores iniciales a cada variable

Importante: <span style = "background-color: LightSteelBlue; color: white; radius=5px"> **_Estos valores serán usados posteriormente en las operaciones con los operadores combinados_**</span>

### Paso 3: Operadores de asignación combinados 

por ejemplo, el operador `+=`:

es un equivalente a `x = x + y `

significado:

1. Se toma el valor actual de `x`
2. Se suma con el valor de `y`
3. El resultado se asigna nuevamente a `x`

Otros operadores similares: 

``` javascript
x -= y; // x = x - y
x *= y; // x = x * y
x /= y; // x = x / y
x %= y; // x = x % y (resto de la division)
```
Explicación: 
