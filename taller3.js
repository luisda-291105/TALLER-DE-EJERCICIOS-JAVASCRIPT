// estrucuturas de ciclos

/* 1: -----
Hacer un programa que calcule la suma de los N primeros números 
naturales, dónde N es el número límite ingresado. */

function suma_de_N_numeros_naturales() {

    let N = Number(prompt("ingrese el valor de N"));
    let contador = 0;

    for (let index = 0; index <= N; index++) {
        contador = contador + index;
    }
    document.writeln(`la suma de los ${N} es: ${contador} `);
}

/* 2: -----
Hacer un programa que pida el nombre de un estudiante y N notas, 
calcular el promedio de las notas y determinar si el estudiante 
aprueba o reprueba; (Aprueba con un promedio de 3).
*/

function promedio_notas_del_estudiante() {
    let nombreEstudiante = prompt("Ingresar el nombre del estudiannte ");
    let sumador = 0;

    for (let index = 0; index < 3; index++) {
        let notas = Number(prompt(`ingrese la nota #${(index + 1)} del estudiante`));

        sumador = sumador + notas;
        if (index == 2) {
            promedioNotas = sumador / 3;
            if (promedioNotas >= 3) {
                alert(`el estudiante ${nombreEstudiante} Aprueba con un promedio de ${promedioNotas}`);
            } else {
                alert(`el estudiante ${nombreEstudiante} Reprueba con un promedio de ${promedioNotas}`);
            }
        }
    }

}

/*  3: -----
Ingrese varios números enteros, muestre la cantidad de números 
ingresados y la suma de los mismos. Realice esta acción hasta 
que el usuario ingrese la palabra FIN.
*/

function varios_numeros_enteros() {
    while (true) {
        let opcion = Number(prompt(`
        ------------------ MENÚ ------------------
Ingrese un número para continuar.
Deje el campo vacío y presione Enter para salir.
------------------------------------------
`)
        )
        if (opcion == " ") {
            alert("saliendo");
            break;
        } else {
            document.writeln(opcion)
        }
    }

}

/*  4: -----
realice una tabla de multiplicar con cualquier número ingresado hasta 
el 30
*/

function tabla_de_multiplicar() {
    let numeroInicial = Number(prompt("cual tabla de multiplicar desea aprender"));
    let contador = 0;

    document.writeln(`la tabla del ${numeroInicial}` + "<br>" + "<br>")
    for (let index = 0; index < 30; index++) {
        contador = contador + numeroInicial;
        document.writeln(`${numeroInicial} * ${index + 1} = ${contador}` + "<br>")
    }
}

/* 5: -----
Cree la tabla de multiplicar de cualquier número ingresado de manera 
descendente
*/

function tabla_de_multiplicar_desendente() {
    let numeroInicial = Number(prompt("cual tabla de multiplicar desea aprender"));
    let contador = 0;

    document.writeln(`la tabla del ${numeroInicial}` + "<br>" + "<br>")

    for (let index = 30; index >= 1; index--) {

        contador = numeroInicial * index;

        document.writeln(`${numeroInicial} * ${index} = ${contador}` + "<br>")
    }
}

/* 6: -----
Cree un ciclo que cuente del 1 al 30 en intervalos el número ingresado
*/

function ingresando_intervalo() {
    let intervalo = Number(prompt("ingresa el numero de intervalo"));

    for (let index = 0; index <= 30; index += intervalo) {
        document.writeln(index);
    }
}

/* 7: -----
Cree un ciclo que cuente del 1 al 30 en intervalos el número ingresado, de manera regresiva.
*/

function ingresando_intervalo_regresiva() {
    let intervalo = Number(prompt("ingresa el numero de intervalo"));

    for (let index = 30; index >= 1; index -= intervalo) {
        document.writeln(index);
    }

}

/* 8: -----
Digite un número (altura) y a partir de él cree una escalera de 
asteriscos o el carácter que desee; con esa altura. Deberá quedar 
así, si ponemos una altura de 5 
*/

function altura_caracter() {
    let altura = 5;
    let contador = "";
    let caracter = "*";
    for (let index = 0; index < altura; index++) {
        contador = contador + caracter;
        console.log(contador);
        document.write(contador);
        document.write("<br>");
    }

}

/* 9: -----
Digite un número (altura) y a partir de él cree una escalera invertida de 
asteriscos o el carácter que desee; con esa altura. Deberá quedar así, si 
ponemos una altura de 5
*/

function altura_caracter_regresiva() {
    let altura = 10;
    let contador = " ";
    let caracter = "*";
    for (let index = altura; index >= 0; index--) {
        contador = caracter.repeat(index) /* altura * index */;
        console.log(contador);
        document.write(contador);
        document.write("<br>");
    }

}

/* 10: -----
Cree un programa que permite registrar el número de compras que se venden cada día. 
pedir al usuario cuantos productos va a comprar y registrar el precio unitario, 
calcular el valor total de cada compra y al finalizar el día calcular cuántas 
facturas se hicieron y el total general.

Cliente #1
No. Productos: 3

valor p1 : 4,500

valor p2: 2,000

valor p3: 3,500

total compra: 10.000
*/

function factura() {

    let productos = [];

    while (true) {
        let nombre_cliente = "luis"
        let no_productos = prompt("ingrese  la cantidad de productos");
        let total = 0;

        for (let index = 1; index <= no_productos; index++) {
            // let nombre = prompt("ingrese el nombre del producto")
            let precio = Number(prompt("ingrese el precio  del producto"))
            // let cantidad = Number(prompt("ingrese la cantidad de producto"))

            let producto = {
                nombre: nombre,
                precio: precio,
                cantidad: cantidad,
            }

            total += producto.precio;
            productos.push(producto);

            if (index == no_productos) {
                document.writeln(`CLIENTE # ${index}`);
                document.writeln(`No. productos #${no_productos}`);
                for (let i = 0; i < productos.length; i++) {
                    document.writeln(`valor p${(i + 1)}: ${productos[i].precio}`);
                }
                document.writeln(`total compra ${total}`);
            }
        }
        break;
    }
}

/* 11: -----
Cree un programa que calcule el promedio de 3 notas para 3 alumnos, el programa 
debe mostrar lo siguiente:

Nombre Alumno #1 Jossy tello
Materia: Matemáticas

Nota 1 : 4,5

Nota 2: 4

Nota 3: 3,5

Promedio: 4
*/

function promedio_notas() {

    let contador = 1;

    while (true) {
        let nombre = prompt(`Ingrese el nombre del alumno #${contador} (o escriba "fin" para salir):`);
        if (nombre.toLowerCase() === "fin") break;

        let materia = prompt("Ingrese la materia a evaluar:");
        let nota1 = Number(prompt("Ingrese la nota #1:"));
        let nota2 = Number(prompt("Ingrese la nota #2:"));
        let nota3 = Number(prompt("Ingrese la nota #3:"));

        let promedio = ((nota1 + nota2 + nota3) / 3).toFixed(1);

        alert(`
Nombre Alumno #${contador}: ${nombre}
Materia: ${materia}

Nota 1: ${nota1}
Nota 2: ${nota2}
Nota 3: ${nota3}

Promedio: ${promedio}
    `);

        contador++;
    }

}

/* 12: -----
Cree tabla de números del 1 al 15 mínimo en HTML. la salida se debe ver así:
*/

function tabla_numerica() {
    let numeroMaximo = 15;
    let acumulador = 0;

    for (let index = 1; index <= numeroMaximo; index++) {
        acumulador = acumulador + 1;
        document.writeln(index + "\t");
        if (index % 5 === 0) {

            document.writeln("<br>");
        }
    }
}

/* 13: -----
Cree un programa que pida la edad a 10 estudiantes y determine cuántos son menores 
de edad y cuales son mayores de edad.
*/

function cuantos_mayores_menores() {
    let persona = Number(prompt("cuantas personas quiere evaluar"));
    let s_mayor = 0;
    let s_menor = 0;

    for (let index = 0; index < persona; index++) {
        let edad = Number(prompt("ingrese su edad"))
        if (edad >= 18) {
            console.log(`la persona #${(index + 1)} su edad es: ${edad} y es mayor de edad`)
            s_mayor += 1;
        } else {
            console.log(`la persona #${(index + 1)} su edad es: ${edad} y es menor de edad`)
            s_menor += 1;
        }
    }
    console.log(`de las personas evaluadas , el numero de mayores es: ${s_mayor}`)
    console.log(`de las personas evaluadas , el numero de nemores es: ${s_menor}`)

}

/* 14: -----
Utiliza la función Math.ramdon() para generar un número aleatorio y compararlo con 
el que el usuario digite. tienes 3 intentos para acertar.
*/

function numero_random() {
    let numeroRandom = Math.floor(Math.random() * 10) + 1;

    for (let index = 0; index < 3; index++) {
        let numeroIngresado = Number(prompt(`ingrese un numero`));
        let intentosRestante = 3 - (index + 1)
        console.log(`intento #${(index + 1)} `);

        if (numeroIngresado == numeroRandom) {
            console.log(`el numero ingresado es igual que el numero random`);
            break;
        } else if (index == 2) {
            console.log(`el numero random es ${numeroRandom}`);
            break;
        }
        else {
            console.log(`intentalo de nuevo, te quedan ${intentosRestante}`)
        }
    }
}