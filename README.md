# 🧑‍💻 TALLERES DE EJERCICIOS — FRONTEND I (Segundo Semestre)

Repositorio dedicado a los talleres prácticos de programación web realizados durante el segundo semestre de Frontend I.
En este proyecto se aplican los fundamentos del lenguaje JavaScript mediante distintos tipos de ejercicios: lineales, condicionales, repetitivos y funciones.

## 📘 Información General

**Asignatura:** Programación Web

**Docente:** Jossy Tello

**Lenguaje:** JavaScript

**Objetivo:** Aplicar los fundamentos del lenguaje JavaScript mediante la resolución de ejercicios prácticos y estructurados.

[🌐 Vista Previa del Proyecto](https://github.com/luisda-291105/TALLER-DE-EJERCICIOS-JAVASCRIPT)

[🔗 Haz clic aquí para ver la página en vivo](https://luisda-291105.github.io/TALLER-DE-EJERCICIOS-JAVASCRIPT/)

## 🧩 TALLER 1 — EJERCICIOS LINEALES

Ejercicios básicos para practicar operaciones aritméticas simples y manejo de entradas del usuario.

### 🧮 Ejercicios

1. **Cálculo de salario:**
   Calcular el salario de un empleado que gana un monto X, descontando el 4% en salud y 5% en pensión.

2. **Área de un triángulo:**
   Aplicar la fórmula A = (b * h) / 2, solicitando la base y la altura al usuario.

3. **Operaciones aritméticas:**
   Sumar, restar, multiplicar, dividir y obtener el módulo de dos números ingresados.

4. **Sueldo mensual:**
   Calcular el sueldo mensual según las horas trabajadas (normales y extras) y sus respectivos valores.

5. **Precio con IVA:**
   Ingresar el precio de un producto, calcular el IVA, mostrar el valor del IVA, el precio sin IVA y el total a pagar.

6. **Porcentaje de alumnos:**
   Calcular el porcentaje de hombres y mujeres en un salón de clases.

7. **Promedio de notas:**
   Calcular el promedio de 3 notas de un alumno (rango de 1 a 5).

## ⚙️ TALLER 2 — EJERCICIOS CONDICIONALES

Ejercicios enfocados en estructuras de decisión usando condicionales if / else y switch.

### 🧠 Ejercicios

1. **Par o impar / positivo o negativo:**
   Determinar si un número ingresado es par o impar y positivo o negativo.

2. **Número mayor y menor:**
   Ingresar dos números y determinar cuál es el mayor y cuál el menor.

3. **Día de la semana:**
   Digitar un número del 1 al 7 y mostrar el día de la semana correspondiente.

4. **Clasificación por edad:**
   Clasificar la etapa de una persona según su edad:
   - < 18 → Adolescente
   - 18–28 → Adulto joven
   - 29–49 → Adulto
   - 50+ → Adulto mayor

5. **Factura de venta:**
   Ingresar el valor de tres productos y calcular el total según el método de pago:
   - Efectivo → valor total
   - Cupón → 3% de descuento
   - Crédito → 5% de recargo

6. **Promedio y nivel de desempeño:**
   Calcular el promedio de 3 notas e indicar el nivel del alumno:
   - < 2.0 → Malo
   - < 2.9 → Debe recuperar
   - 3.0–3.9 → Regular
   - 4.0–4.4 → Bueno
   - 4.5–5.0 → Muy bueno

## 🔁 TALLER 3 — ESTRUCTURAS REPETITIVAS

Ejercicios para practicar bucles como for, while, y do...while, con ejemplos de ciclos anidados y combinados con condicionales.

### 🔄 Ejercicios Básicos

1. Suma de N números naturales.

2. Promedio de N notas de un estudiante (aprueba con promedio ≥ 3).

3. Suma y cantidad de números ingresados hasta escribir FIN.

4. Tabla de multiplicar hasta el 30.

5. Tabla de multiplicar descendente.

6. Contador ascendente del 1 al 30 en intervalos definidos por el usuario.

7. Contador descendente del 30 al 1 en intervalos definidos.

### 🧱 Ejercicios Anidados

8. **Escalera de asteriscos:**
   Crear una escalera visual con la altura ingresada.
   Ejemplo (altura = 5):
```
   *
   **
   ***
   ****
   *****
```

9. **Escalera invertida:**
   Crear una escalera de asteriscos invertida con la altura ingresada.
   Ejemplo (altura = 5):
```
   *****
   ****
   ***
   **
   *
```

### 🧾 Ejercicios con estructuras repetitivas + condicionales

10. **Registro de compras diarias:**
    Permitir registrar el número de productos y su precio unitario, calcular el total por cliente y el total general del día.
    Ejemplo:
```
    Cliente #1
    Productos: 3
    p1: 4500
    p2: 2000
    p3: 3500
    Total: 10,000

    Cliente #2
    Productos: 2
    p1: 1500
    p2: 2000
    Total: 3,500

    Total ventas del día: 2
    Total general del día: 13,500
```

11. **Promedio de 3 alumnos:**
    Calcular el promedio de 3 notas por alumno.
    Ejemplo de salida:
```
    Alumno #1: Jossy Tello
    Materia: Matemáticas
    Promedio: 4.0

    Alumno #2: Ángela Robledo
    Materia: Física
    Promedio: 4.2
```

12. **Tabla numérica en HTML:**
    Mostrar una tabla del 1 al 15 con formato tabular:
```
    1  2  3  4  5
    6  7  8  9 10
    11 12 13 14 15
```

13. **Conteo de edades:**
    Ingresar la edad de 10 estudiantes y mostrar cuántos son menores y mayores de edad.

14. **Número aleatorio con intentos:**
    Generar un número aleatorio con Math.random() y permitir 3 intentos al usuario para adivinarlo.

## 🔧 TALLER 4 — FUNCIONES EN JAVASCRIPT

Ejercicios enfocados en la creación y uso de funciones con parámetros, retorno de valores y múltiples funciones trabajando en conjunto.

### 📦 Ejercicios de funciones con parámetros

1. **Superficie de un rectángulo:**
   Crea y llama una función que recibe el ancho y el alto de un rectángulo y calcula su superficie.
   **Fórmula:** `superficie = ancho * alto`

2. **Conversor de velocidad:**
   Crea y llama las funciones necesarias para recibir la velocidad en Kilómetros y mostrarlas en metros y millas.

3. **Circunferencia y cubo:**
   Por medio de una función calcula la circunferencia de un círculo utilizando la siguiente fórmula: `circunferencia = 2 * Math.PI * radio`. También crea y llama una función que recibe un número y calcula su cubo.
   
   **Ejemplo:**
```javascript
   function circunferencia(radio) {
       return formula;
   }
```

4. **Validación de nombre:**
   Crea una función donde pases como parámetro un nombre y muéstralo en el navegador. Validar que el dato ingresado no sea un número, de ser así se debe decir en pantalla "ingrese un nombre válido". (lo puedes hacer con la función `isNaN()`, investiga cómo funciona)

5. **Operaciones básicas:**
   Muestra todas las operaciones básicas (suma, resta, multiplicación, división), pidiendo al usuario 2 números por medio de una función.

### 🔀 Ejercicios con varias funciones

6. **Conversor de temperatura:**
   Cree un conversor de temperatura, investigando la fórmula para pasar grados de Celsius a Fahrenheit y viceversa. Pida al usuario la temperatura a convertir y muestra en pantalla lo siguiente:
   - Si la Temperatura es menos 0°C o 32°F: **Nos congelamos**
   - Si la Temperatura es entre 5°C a 15°C o 33°F a 50°F: **Está haciendo frío**
   - Si la Temperatura es entre 16°C a 25°C o 51°F a 77°F: **Está templado el día**
   - Si la Temperatura es más de 26°C o 78°F: **Tiene fiebre o es el apocalipsis**

7. **Índice de masa corporal (IMC):**
   Calcule el índice de masa muscular de una persona con la siguiente fórmula: `IMC = peso / (altura * altura)`, pidiendo como datos su altura y peso. Imprima en pantalla lo siguiente:
   - Si el IMC es por debajo de 18.5: **Bajo peso, debe ir al nutricionista**
   - Si el IMC es 18.5 — 24.9: **Normal**
   - Si el IMC es 25.0 — 29.9: **Sobrepeso**
   - Si el IMC es 30.0 o más: **Obeso, debe ir al nutricionista**

8. **Mensaje de bienvenida:**
   Cree una función que pida el nombre del usuario, y por medio de otra función imprima el nombre y un mensaje que diga "Bienvenido + nombre".

9. **Calculadora de IVA:**
   Cree una función que pida el precio de N productos y por medio de otra función aumente el IVA del 19% y diga al usuario el precio total a pagar los productos que compró y el precio de cada uno.
   
   **Ejemplo:**
```
   producto 1 = $3.000
   producto 2 = $4.500
   producto 3 = $2.500
   ————————————————————
   subtotal = $10.000
   iva = $1.900
   Total a pagar: $11.900
```

10. **Días restantes del año:**
    Cree una función que pida la fecha actual y por medio de otra función calcule cuántos días y semanas faltan para terminar el año.

11. **Listado de compras:**
    Cree un listado de compras, con función que pida el número de productos, nombre y valor del producto. Por medio de otra función imprima la información digitada.
    
    **Ejemplo:**
```
    1 - arroz    $2.500 x 3 = $7.500
    2 - aceite   $4.500 x 1 = $4.500
    3 - azúcar   $2.000 x 2 = $4.000
    ——————————————————————————————
    Total Mercado: $16.000
```

## 📋 TALLER 5 - ARRAY Y OBJETOS

### Ejercicios con arrays

1. **Diferencia entre objetos y array**
Consulte qué son los arrays y explique en qué se diferencian los arrays de los objetos.

2. **Propiedades y funciones**
Menciona por lo menos 1 propiedades y 3 funciones que tienen integrados los arrays. Realice un ejemplo de cada uno.

3. **Metodos**
Realiza 1 ejercicio explicando cómo funcionan los métodos push(), pop(), slice() y splice(), reduce(), indexOf(), forEach(), map(), sort().

4. **Array de frutas e imprimir**
Crea un array con nombres de frutas e imprime los datos en html por medio de un ciclo.

5. **Array con 3 elementos**
Cree un array con 3 elementos inicialmente y después agregue 2 elementos más, imprima en html todo los elementos.

6. **Pociciones en el arreglo**
Del siguiente arreglo [3,5,9,10,35,42,12,22,25] mostrar en html cual es el primer número, el último, el del centro.

7. **pares e impares**
Del siguiente arreglo [3,5,9,10,35,42,12,22,25] mostrar en html cuales y cuantos son los números pares y los impares.

8. **Clasificar verduras y frutas**
Del siguiente arreglo [tomate,banano,manzana,pera,cebolla,papa,fresas,Ajo,Sandía] mostrar en html en cual posición se encuentran las frutas y en cual posición las verduras.

9. **Mostrar de forma asendente**
Del siguiente arreglo [29,5,40,10,35,42,12,22,25,1,3] mostrar en html los elementos organizados de forma ascendente.

10. **Mostrar de forma desendente**
Del siguiente arreglo [29,5,40,10,35,42,12,22,25,1,3] mostrar en html los elementos organizados de forma descendente.

11. **Mostrar de manera aleatoria**
Del siguiente arreglo [2,4,6,8,10,12,14,16,18,20,22] mostrar en html los elementos ordenados aleatoriamente.

12. **Calcular con los arreglos**
arreglo 1: [3,5,9,10,35,42,12,22,25], arreglo 2: [9,5,33,12,7,20,22,3,8] de los anteriores arreglos mostrar en forma de (tabla de multiplicar) la suma de los elementos del arreglo 1 con los elementos del arreglo 2 también sumar el total de cada arreglo.

**Resultado:**

```
3 + 9 = 12
5 + 5 = 10
9 + 33 = 42
10 + 12 = 22
35 + 7 = 42
42 + 20 = 62
12 + 22 = 34
22 + 3 = 25
25 + 8 = 33
163 + 119 = 282
```

### Ejercicios con objetos

1. **Mostrar valores**
Cree el siguiente objeto `{"v1":"tomate","v2":"Cebolla","v3": "Ajo"}` y muestre en el navegador solo los valores.

2. **Mostar llaves**
Cree el siguiente objeto `{"v1":"tomate","v2":"Cebolla","v3": "Ajo"}` y muestre en el navegador solo las referencias o llaves.

3. **Mostrar llaves y valores**
Cree el siguiente objeto `{"v1":"tomate","v2":"Cebolla","v3": "Ajo"}` y muestre en el navegador llaves y valores.

4. **Agregar 2 verduras**
Cree el siguiente objeto `{"v1":"tomate","v2":"Cebolla","v3": "Ajo"}` agregue 2 verduras más y muestre los valores en el navegador.

5. **Agregar valores**
Del siguiente objeto `{ nombre, precio, cantidad}` llene sus valores dinámicamente con mínimo 3 productos y muestre sus datos en el navegador.

6. **Igual que la 5**
Del siguiente objeto `{ nombre, precio, cantidad}` llene sus valores dinámicamente con mínimo 3 productos y muestre sus datos en el navegador.

7. **Agregar valores y mostrar total con iva**
Del siguiente objeto `{ producto, precio, cantidad}` llene sus valores dinámicamente con mínimo 2 productos y muestre el subtotal a pagar de los 3 productos y el total de la compra con el iva aumentado.


## 🧰 Tecnologías Utilizadas

- HTML5
- CSS3
- JavaScript (puro / Vanilla JS)
- GitHub Pages (para la publicación)



## ✨ Autor

**Luis Daniel**  
👨‍🎓 Estudiante de Desarrollo de Software  
📍 Colombia  
[📬 GitHub Profile](https://github.com/luisda-291105)