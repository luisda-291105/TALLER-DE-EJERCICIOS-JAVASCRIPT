do {
    let menu = Number(prompt(
    `-- MENU --
    par impar  : 1
    mayor menor : 2
    dias de semana : 3
    etapa : 4
    factura : 5
    notas : 6
    calculo edad : 7
    costo hospitalario : 8
    salir = 9`));

switch (menu) {
    case 1:
        parImpar();
        break;

    case 2:
        mayorMenor();
        break;

    case 3:
        semana();
        break;

    case 4:
        etapa();
        break;

    case 5:
        factura();
        break;

    case 6:
        notas();
        break;

    case 7:
        calculoEdad();
        break;

    case 8:
        hospital();
        break;

    case 9:
        alert("saliendo");
        break;

    default:
        alert("intente de nuevo");
        break;
}

} while (menu != 9);

/*
1.	----------------------
Pide al usuario un número y determina si es par o impar y si es
positivo o negativo.
*/

function parImpar() {

    let numero = Number(prompt("ingresa un numero"));

    if (numero < 0) {
        if (numero % 2 == 0) {
            alert("el nummero es par y negativo")
        } else {
            alert("el numero es impar y negativo")
        }
    }

    if (numero > 0) {
        if (numero % 2 == 0) {
            alert("el nummero es par y positivo")
        } else {
            alert("el numero es impar y positivo")
        }
    }
}

/*
2.	-----------------
Pide al usuario dos números y determina cual es el número mayor y
cual es el menor
*/

function mayorMenor() {

    let numeroMayor = Number(prompt("ingresa un numero"));
    let numeroMenor = Number(prompt("ingresa un numero"));
    let resultado;

    resultado = numeroMayor > numeroMenor ? "primero" : "segundo";

    alert("el mayor es " + resultado)
}

/* 3. ----------------
Pide al usuario que digite un numero del 1 al 7 y Realiza el código
correspondiente para saber cuál es el dia de la semana correspondiente al
número digitado
*/

function semana() {

    let option = Number(prompt("ingresa un numero del 1 al 7"));

    switch (option) {
        case 1:
            alert("lunes")
            break;
        case 2:
            alert("martes")
            break;
        case 3:
            alert("miercoles")
            break;
        case 4:
            alert("jueves")
            break;
        case 5:
            alert("viernes")
            break;
        case 6:
            alert("sabado")
            break;
        case 7:
            alert("domingo")
            break;
        default:
            alert("es del 1 al 7")
            break;
    }

}

/*
4.  ---------------------------
Se necesita clasificar la etapa de una persona solo pidiéndole como
dato su edad. (Si la edad es menor de 18 es adolente), (si la edad está
en el rango de 18 a 28 es adulto adolecente), (si la edad está entre 29
a 49 es adulto), (si la edad está entre 50 en adelante es adulto mayor).

Mostrar en pantalla la etapa de la persona.
*/

function etapa() {
    let edad = Number(prompt("digite su edad"));

    if (edad < 18) {
        alert("menor");
    }
    else if (edad >= 18 && edad <= 28) {
        alert(" adolcente");

    }
    else if (edad >= 29 && edad <= 49) {
        alert("adulto");
    }

    else {
        alert("adulto mayor");
    }

}


/* 
5.	 --------------------------
Realice una factura de venta, ingrese el valor de 3 productos y 
calcule lo siguiente:

si paga en efectivo paga el valor total.
si paga con cupón realice un 3% de descuento
si paga a crédito aumente el 5% al total.

*/

function factura() {
    class Productos {
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

    for (let index = 0; index < 3; index++) {
        let nombreProducto = prompt("ingresa el nombre del producto numero " + index)
        let valorProducto = Number(prompt("ingresa el valor del producto numero " + index))
        let metodoPago = Number(prompt("metodos de pago: 1 = efectivo 2= cupon  3= credito"))
        const miProducto = new Productos(nombreProducto, valorProducto);

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

    }
}

/*
6.  -------------------------------
Se pide ingresar 3 notas y calcular el promedio de un alumno, mostrar el nivel del alumnos según su promedio: 
*  menos 2,0 = Malo
*  menos 2,9 = Debe recuperar
* entre 3 – 3,9 = Regular.
* entre 4 – 4,4 = Bueno.
* entre 4,5 – 5 = Muy bueno.
*/

function notas() {

    let nota1 = Number(prompt("ingresa la primera nota"))
    let nota2 = Number(prompt("ingresa la segunda nota"))
    let nota3 = Number(prompt("ingresa la tercera  nota"))
    let promedio = (nota1 + nota2 + nota3) / 3;

    if (promedio <= 2.0) {
        alert("la tofa fue " + promedio + "  maloo🤮");
    } else if (promedio > 2.1 && promedio < 2.9) {
        alert("la tofa fue " + promedio + "  debe recuperar 🤒");
    } else if (promedio >= 3 && promedio <= 3.9) {
        alert("la tofa fue " + promedio + "  regular 😒");
    } else if (promedio >= 4 && promedio <= 4.4) {
        alert("la tofa fue " + promedio + "  bueno 👌");
    } else {
        alert("la tofa fue " + promedio + " muy bueno 😍");
    }

}

/*
7. --------------
Calcula la edad actual de una persona a partir de su fecha de nacimiento.
Los datos a pedir son: día, mes y año de nacimiento.
*/

function calculoEdad() {

    let dia = prompt("de su fecha de nacimiento digite = dia");
    let mes = prompt("de su fecha de nacimiento digite = mes");
    let año = prompt("de su fecha de nacimiento digite = año");

    dia = parseInt(dia);
    mes = parseInt(mes);
    año = parseInt(año);


    let fechaNacimiento = new Date(año, mes - 1, dia);
    let hoy = new Date();

    // diferencia en milisegundos
    let diferenciaMes = hoy.getMonth() - fechaNacimiento.getMonth();

    // convertir misisegundos a años
    let edad = hoy.getFullYear() - fechaNacimiento.getFullYear();

    if (diferenciaMes < 0 || (diferenciaMes === 0 && hoy.getDate() < fechaNacimiento.getDate())) {
        edad--;
    }


    alert(`tu edad es ${edad}`);

}

/* 
8. ------------------
Calcula cuánto se debe pagar por costos de hospitalización en la clínica Me Muero según los siguientes datos:

Mostrar en pantalla días de hospitalización del paciente
Valor dia según su edad
Valor del recargo y total a pagar

dia            costo              sobre cargo 
1 o menos      = 20_000           =   0
entre 2 a 4    = 30_000 * dias    =   0
entre 5 a 7    = 25_000 * dias    =   5%
8 o mas        = 15_000 * dias    =   10%
*/

function hospital() {
    let edad = Number(prompt("ingrese su edad"))
    let dias = Number(prompt("ingrese el numero de dias"))

    function diasHospital() {

        function menos1() {
            let costoDias = 20_000;
            let sobrecargo = 0;
            let totalPagar = costoDias + sobrecargo;

            mensaje(totalPagar, costoDias, sobrecargo);
        }

        function _2a4() {
            let costoDias = 30_000;
            let sobrecargo = 0;
            let totalPagar = costoDias + sobrecargo;

            mensaje(totalPagar, costoDias, sobrecargo);
        }

        function _5a7() {
            let costoDias = 25_000;
            let sobrecargo = 0.05 * costoDias;
            let totalPagar = costoDias + sobrecargo;

            mensaje(totalPagar, costoDias, sobrecargo);
        }

        function _mas8() {
            let costoDias = 15_000;
            let sobrecargo = 0.10 * costoDias;
            let totalPagar = costoDias + sobrecargo;

            mensaje(totalPagar, costoDias, sobrecargo);
        }



        if (dias <= 1) {
            menos1();
        }

        else if (dias >= 2 && dias <= 4) {
            _2a4();
        }

        else if (dias >= 5 && dias <= 7) {
            _5a7();
        }

        else {
            _mas8();
        }

    }

    if (edad >= 0 && edad <= 10) {
        diasHospital();
    }
    else if (edad >= 11 && edad <= 17) {
        diasHospital();
    }

    else if (edad >= 18 && edad <= 49) {
        diasHospital();
    }

    else {
        diasHospital();
    }

    function mensaje(totalPagar, costoDias, sobrecargo) {
        alert(`Resumen de hospitalización:

- Días de hospitalización: ${dias} día(s)
- Edad del paciente: ${edad} años
- Costo por día: $${costoDias}
- Valor por recargos: $${sobrecargo}
----------------------------------
Total a pagar: $${totalPagar}`);
    }

}


do {
    let menu = Number(prompt(
        `-- MENU --
    par impar  : 1
    mayor menor : 2
    dias de semana : 3
    etapa : 4
    factura : 5
    notas : 6
    calculo edad : 7
    costo hospitalario : 8
    salir = 9`));

    switch (menu) {
        case 1:
            parImpar();
            break;

        case 2:
            parImpar();
            break;

        case 3:
            etapa();
            break;

        case 4:
            etapa();
            break;

        case 5:
            factura();
            break;

        case 6:
            notas();
            break;

        case 7:
            calculoEdad();
            break;

        case 8:
            hospital();
            break;

        case 9:
            alert("saliendo");
            break;

        default:
            alert("intente de nuevo");
            break;
    }

} while (menu != 9);
