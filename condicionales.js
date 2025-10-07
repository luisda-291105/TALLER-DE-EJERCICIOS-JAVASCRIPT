/*
1.	----------------------
Pide al usuario un número y determina si es par o impar y si es
positivo o negativo.


let numero = 10;

if (numero < 0) {
    if (numero % 2 == 0) {
        alert("el nummero es par y negativo")
    } else {
        alert("el numero es impar y negativo")
    }
}

if(numero > 0 ) {
    if (numero % 2 == 0){
        alert("el nummero es par y positivo")
    }else {
        alert("el numero es impar y positivo")
    }
} */

/*
2.	-----------------
Pide al usuario dos números y determina cual es el número mayor y
cual es el menor

let numeroMayor = 50;
let numeroMenor = 30;
let resultado ;

resultado = numeroMayor > numeroMenor ? "primero" : "segundo" ;

alert("el mayor es " +resultado)
*/

/* 3. ----------------
Pide al usuario que digite un numero del 1 al 7 y Realiza el código
correspondiente para saber cuál es el dia de la semana correspondiente al
número digitado


let option = 3 ;

switch (option) {
    case 1 :
        alert("lunes")
        break;
    case 2 :
        alert("martes")
        break;
    case 3 :
        alert("miercoles")
        break;
    case 4 :
        alert("jueves")
        break;
    case 5 :
        alert("viernes")
        break;
    case 6 :
        alert("sabado")
        break;
    case 7 :
        alert("domingo")
        break;
    default :
        alert("es del 1 al 7")
        break;
}
*/

/*
4.  ---------------------------
Se necesita clasificar la etapa de una persona solo pidiéndole como
dato su edad. (Si la edad es menor de 18 es adolente), (si la edad está
en el rango de 18 a 28 es adulto adolecente), (si la edad está entre 29
a 49 es adulto), (si la edad está entre 50 en adelante es adulto mayor).

Mostrar en pantalla la etapa de la persona.
*/

// tenia un error en operador logico
/* 
let edad = 28;

if (edad < 18 ) {
    alert("menor")
} 
else if (edad >= 18 && edad <=28) {
    alert(" adolcente")

}
else if (edad >= 29 && edad <= 49 ) {
    alert("adulto")
}

else {
    alert("adulto mayor")
}
 */


/* 
5.	 --------------------------
Realice una factura de venta, ingrese el valor de 3 productos y 
calcule lo siguiente:

si paga en efectivo paga el valor total.
si paga con cupón realice un 3% de descuento
si paga a crédito aumente el 5% al total.

*/
/* class Productos {
    constructor(nombreProducto, valorProducto) {
        this.nombreProducto = nombreProducto;
        this.valorProducto = valorProducto;
    }

    efectivo() {
        alert(`el producto ${this.nombreProducto}  vale: 
            ${this.valorProducto}`)
    }

    cupon() {
        let descuento3 = 3 / 100;
        let descuento = this.valorProducto * descuento3;
        let total = this.valorProducto - descuento;

        alert(`el producto llamado ${this.nombreProducto}, 
        su presio original es ${this.valorProducto},
        menos el copon del 3% que es igual a ${descuento}
        el valor total menos el descuento ${total}`);
    }

    credito() {
        let aumento5 = 5 / 100;
        let aumento = this.valorProducto * aumento5;
        let total = this.valorProducto + aumento;

        alert(`el producto llamado ${this.nombreProducto}, 
        su presio original es ${this.valorProducto},
        mas el aumento del 5% ${aumento}
        el valor total mas el aumento ${total}`);
    }
}

for (let index = 0; index < 3 ; index++) {
    let nombreProducto = prompt("ingresa el nombre del producto numero "+index)
    let valorProducto = Number(prompt("ingresa el valor del producto numero "+index))
    let metodoPago = Number(prompt("metodos de pago: 1 = efectivo 2= cupon  3= credito"))
    const miProducto = new Productos(nombreProducto , valorProducto );

    switch (metodoPago) {
        case 1: // efectivo
            miProducto.efectivo();
            break;
        case 2: // cupon
            miProducto.cupon()
            break;
        case 3: // credito
            miProducto.credito();
            break;
    
        default:
            alert("error, intente de nuevo")
            break;
    }
    
} */

/*
6.  -------------------------------
Se pide ingresar 3 notas y calcular el promedio de un alumno, mostrar el nivel del alumnos según su promedio: 
*  menos 2,0 = Malo
*  menos 2,9 = Debe recuperar
* entre 3 – 3,9 = Regular.
* entre 4 – 4,4 = Bueno.
* entre 4,5 – 5 = Muy bueno.
*/

/* let nota1 , nota2 , nota3 , promedio ;
nota1 = Number(prompt("ingresa la primera nota"))
nota2 = Number(prompt("ingresa la segunda nota"))
nota3 = Number(prompt("ingresa la tercera  nota"))
promedio = (nota1 + nota2 + nota3)/3;

if (promedio <= 2.0 ) {
    alert("la tofa fue "+promedio+"  maloo🤮");
} else if(promedio >2.1 && promedio < 2.9){
    alert("la tofa fue "+promedio+"  debe recuperar 🤒");
} else if (promedio >= 3 && promedio <= 3.9) {
    alert("la tofa fue "+promedio+"  regular 😒");
} else if (promedio >= 4 && promedio <= 4.4) {
    alert("la tofa fue "+promedio+"  bueno 👌");
} else {
    alert("la tofa fue "+promedio+" muy bueno 😍");
} */


/*
7. --------------
Calcula la edad actual de una persona a partir de su fecha de nacimiento.
Los datos a pedir son: día, mes y año de nacimiento.
*/

let fechaNacimiento = 2005;
let fechaActual = 2025;
let edadUsuario = fechaActual - fechaNacimiento ;

alert(`naciste el ${fechaNacimiento} y hoy estamos a ${fechaActual} 
    asi que usted tiene ${edadUsuario}`);