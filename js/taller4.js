// esta variables es para el evento de select al inicio
let nombreOpcion = document.getElementById("nombreOpcion");
let botonAgregar = document.getElementById("botonAgregar");

// estas son para contener 
let contenedorLista = document.getElementById("contenedorLista");


// estas dos variables son para crear una funcion que elimine la respuesta
let boton_eliminar = document.getElementById("boton_eliminar");
let formularioSecundario = document.getElementById("formularioSecundario");


/* 1: -----  superficie_del_rectangulo
crea y llama una funcion que recibe el ancho y el alto de un rectángulo y
calcula su superficie. Fórmula: superficie = ancho * alto
*/

function superficie_del_rectangulo() {
    // imprimo botones para recolectar e iniciar el calcular

    document.getElementById("contenedorLista").innerHTML = `
    <div class="formulario" id="formularioSecundario">
        <div class="grupo-input">
            <input 
                type="number" 
                id="ancho" 
                placeholder="Escribe aquí el numero 1"
            >
        </div>
        <div class="grupo-input">
            <input 
                type="number" 
                id="alto" 
                placeholder="Escribe aquí el nuemero 2"
            >
        </div>
        <div>
            <button onclick="calculo_superficie_del_rectangulo()">calcular</button>
            </div>
            <div id="aquiRespuesta" style="margin-top: 10px; padding: 10px; border-radius: 5px;"></div>
    </div>
    `
}

function calculo_superficie_del_rectangulo() {
    // obtiene los valores
    let superficie;
    let ancho = document.getElementById("ancho").value || 0;
    let alto = document.getElementById("alto").value || 0;

    // operacion
    superficie = ancho * alto;
    // imprime la prespuesta

    document.getElementById("aquiRespuesta").innerHTML = `
        <p>la superficie del rectangulo es ${superficie}</p>
        `
}

/* 2: ----- velocidad
crea y  llama las funciones necesarias para recivir la velocidad en 
kilometros y mostrarlas en metros y millas 
*/

function velocidad() {
    document.getElementById("contenedorLista").innerHTML = `
    <!-- Solo los dos inputs -->
    <div class="formulario" id="formularioSecundario">
        <div class="grupo-input">
            <input 
                type="number" 
                id="kilometros" 
                placeholder="Escribe aquí la velocidad km*h "
            >
        </div>

        <div >
            <button onclick="calculo_velocidad()">calcular</button>
            </div>
            <div id="aquiRespuesta" style="margin-top: 10px; padding: 10px; border-radius: 5px;"></div>
    </div>
`;

}

function calculo_velocidad() {
    let km_h = document.getElementById("kilometros").value || 0;

    let m_s = km_h * 0.27778;

    let mph = km_h * 0.621371;

    document.getElementById("aquiRespuesta").innerHTML = `
        <p>la conversion de km*h a ms es: ${m_s.toFixed(2)}</p>
        <p>la conversion de km*h a mph es: ${mph.toFixed(2)}</p>
    `;
}

/* 3: ----- circunferencia_circulo
por medio de una funcion calcula la circunferencia de un circulo utilizando
la siguiente formula : circunferencia = 2*Math.PI * radio , tambien crea y 
llama una funcion que recibe un numero y calcule su cubo.

ejemplo: 

function circunferencia (radio){
    return formula;
}
*/

function circunferencia_circulo() {
    contenedorLista.innerHTML = `
    <!-- Solo los dos inputs -->
    <div class="formulario" id="formularioSecundario">
        <div class="grupo-input">
            <input 
                type="number" 
                id="radio" 
                placeholder="Escribe aquí el radio"
            >
        </div>

        <div >
            <button onclick="calculo_circunferencia_circulo()">calcular</button>
            </div>
            <div id="aquiRespuesta" style="margin-top: 10px; padding: 10px; border-radius: 5px;"></div>
    </div>
`;


}

function calculo_circunferencia_circulo() {
    const pi = Math.PI;
    let radio = document.getElementById("radio").value || 0;

    let circunferencia = 2 * pi * radio;

    let cubo = circunferencia * circunferencia * circunferencia;

    document.getElementById("aquiRespuesta").innerHTML = `
        <p>la circunferencia del circulo es ${circunferencia.toFixed(2)}</p>
        <p>y su cubo es ${Math.round(cubo)}</p>
        `
}

/* 4: ----- validarTexto
crea una funcion en donde pases como parametro un nombre y múestralo en el 
navegador;
valida que el nombre ingresado no sea un  numero ,
debe decir "ingresa un nombre válido" 
(lo puedes hacer con la funcion isNaN() , investiga como funciona)
*/

function validar_texto() {
    contenedorLista.innerHTML = `
    <!-- Solo los dos inputs -->
    <div class="formulario" id="formularioSecundario">
        <div class="grupo-input">
            <input 
                type="text" 
                id="nombre" 
                placeholder="Escribe aquí el nombre"
            >
        </div>

        <div>
            <button onclick="calculo_validar_texto()">verificar</button>
            </div>
            <div id="aquiRespuesta" style="margin-top: 10px; padding: 10px; border-radius: 5px;"></div>
    </div>
`;
}

function calculo_validar_texto() {
    let nombre = document.getElementById("nombre");

    if (isNaN(nombre)) {
        document.getElementById("aquiRespuesta").innerHTML = ("enserio te llamas " + nombre + " chimba ese nombre");
    } else {
        document.getElementById("aquiRespuesta").innerHTML = ("ingresa un nombre válido");
    }
}

/* 5: ----- calculadora_basica
muestra todas las operaciones basicas (suma, resta, multi, divicion).
pidiendo al usuario 2 numeros por medio de una funcion
*/

function calculadora_basica_completa() {
    contenedorLista.innerHTML = `
    <!-- Solo los dos inputs -->
    <div class="formulario" id="formularioSecundario">
        <div class="grupo-input">
            <input 
                type="number" 
                id="numero1" 
                placeholder="primer numero aquí"
                min="0"
            >
        </div>
        <div>
            <select id="optionSelect">
                <option value="nada" hidden>operaciones</option>
                <option value="suma">suma</option>
                <option value="resta">resta</option>
                <option value="divicion">divicion</option>
                <option value="multi">multi</option>
            </select>
        </div>
        <div class="grupo-input">
            <input 
                type="number" 
                id="numero2" 
                placeholder="segundo nuemero aquí"
                min="0"
            >
        </div>
        <div>
            <button onclick="calculo_calculadora_basica_completa()">calcular</button>
            </div>
            <div id="aquiRespuesta" style="margin-top: 10px; padding: 10px; border-radius: 5px;"></div>
    </div>
`;

}

function calculo_calculadora_basica_completa() {
    class calculadora_basica {
        constructor(numero1, numero2) {
            this.numero1 = numero1;
            this.numero2 = numero2;
        }
        suma() {
            return this.numero1 + this.numero2;
        }
        resta() {
            return this.numero1 - this.numero2;
        }
        multi() {
            return this.numero1 * this.numero2;
        }
        divide() {
            return this.numero1 / this.numero2;
        }
    }
    let operacion = document.getElementById("optionSelect").value;
    let numero1 = document.getElementById("numero1").value || 0;
    let numero2 = document.getElementById("numero2").value || 0;
    let respuesta;

    let calculadora_basica_1 = new calculadora_basica(numero1, numero2)
    switch (operacion) {
        case "suma":
            respuesta = calculadora_basica_1.suma();
            aquiRespuesta.innerHTML = ("la suma dio: " + respuesta);
            break;
        case "resta":
            respuesta = calculadora_basica_1.resta();
            aquiRespuesta.innerHTML = ("la resta dio: " + respuesta);
            break;
        case "divicion":
            respuesta = calculadora_basica_1.divide();
            aquiRespuesta.innerHTML = ("la divicion dio: " + respuesta);
            break;
        case "multi":
            respuesta = calculadora_basica_1.multi();
            aquiRespuesta.innerHTML = ("la multiplicacion dio: " + respuesta);
            break;

        default:
            alert("intentelo de nuevo")
            break;

    }
}

/* 6: ----- conversor_de_temperatura
Cree un conversor de temperatura, investigando la fórmula para pasar
grados de Celsius a Fahrenheit y viceversa, pida al usuario la
temperatura a convertir y muestra en pantalla lo siguiente:

● Si la Temperatura es menos 0°C o 32°F : Nos congelamos

● Si la Temperatura es entre de 5°C a 15°C o 33°F a 50°F : Esta
haciendo frio

● Si la Temperatura es entre de 16°C a 25°C o 51°F a 77°F : Está
templado el dia

● Si la Temperatura es más de 26°C o 78°F : Tiene fiebre o es el
apocalipsis
*/

function conversor_de_temperatura() {
    contenedorLista.innerHTML = `
    <!-- Solo los dos inputs -->
    <div class="formulario" id="formularioSecundario">
        <div class="grupo-input">
            <input 
                type="number" 
                id="temperaturaInput" 
                placeholder="la temperatura aquí"
            >
        </div>

        <div>
            <select id="optionSelect">
                <option value="0" hidden>c° o f°</option>
                <option value="1">fahrenheit</option>
                <option value="2">celsius</option>
            </select>
        </div>

        <div>
            <button onclick="calculo_conversor_de_temperatura()">calcular</button>
            </div>
            <div id="aquiRespuesta" style="margin-top: 10px; padding: 10px; border-radius: 5px;"></div>
    </div>
`;
}

function calculo_conversor_de_temperatura() {
    let temperaturaInput = document.getElementById("temperaturaInput").value || 0;
    let operacion = document.getElementById("optionSelect").value;
    let f = 0;
    let c = 0;

    if (operacion == 1) { // fahrenheit
        f = (temperaturaInput * (9 / 5)) + 32
        aquiRespuesta.innerHTML = (Math.round(f) + "f°");
    }
    else if (operacion == 2) {// celsius
        c = (temperaturaInput - 32) * 5 / 9;
        aquiRespuesta.innerHTML = (Math.round(c) + "c°");
    }

    if (operacion == 1 || operacion == 2) {
        if (c < 0 || f < 32) {
            aquiRespuesta.innerHTML = ("Nos congelamos")
        } else if (c >= 5 && c <= 15 || f >= 33 && f <= 50) {
            aquiRespuesta.innerHTML = ("Esta haciendo frio")
        } else if (c >= 16 && c <= 25 || f >= 51 && f <= 77) {
            aquiRespuesta.innerHTML = (" Está templado el dia")
        } else {
            aquiRespuesta.innerHTML = ("Tiene fiebre o es el apocalipsis")
        }
    } else {
        aquiRespuesta.innerHTML = ("intentelo de nuevo")
    }

}

/* 7: ----- indise_masa_muscular
Calcule el índice de masa muscular de una persona con la siguiente
fórmula (IMC=peso/(altura x altura)), pidiendo como datos su altura y
peso. imprima en pantalla lo siguiente:

a. Si el IMC es por debajo de 18.5 : Bajo peso debe ir al nutricionista
b. Si el IMC es 18.5—24.9 : Normal
c. Si el IMC es 25.0—29.9 : Sobrepeso
d. Si el IMC es 30.0 o más : Obeso debe ir al nutricionista
*/

function indise_masa_muscular() {
    contenedorLista.innerHTML = `
    <!-- Solo los dos inputs -->
    <div class="formulario" id="formularioSecundario">
        <div class="grupo-input">
            <input 
                type="number" 
                id="peso" 
                placeholder="el peso aquí"
            >
        </div>

        <div class="grupo-input">
            <input 
                type="number" 
                id="altura" 
                placeholder="la altuera aquí"
            >
        </div>
        <div>
            <button onclick="calculo_indise_masa_muscular()">calcular</button>
        </div>
        <div id="aquiRespuesta" style="margin-top: 10px; padding: 10px; border-radius: 5px;">

        </div>
    </div>
`;

}

function calculo_indise_masa_muscular() {
    let IMC;
    let peso = document.getElementById("peso").value || 0;
    let altura = document.getElementById("altura").value || 0;


    if (isNaN(peso) || isNaN(altura)) {
        aquiRespuesta.innerHTML = "su informacion es incorrecta";
    } else {
        IMC = peso / (altura * altura);



        if (IMC < 18.5) {
            document.getElementById("aquiRespuesta").innerHTML = "su IMC fue " + Math.round(IMC) +
                ", Bajo peso debe ir al nutricionista";
        } else if (IMC >= 18.6 && IMC <= 24.9) {
            document.getElementById("aquiRespuesta").innerHTML = "su IMC fue " + Math.round(IMC) +
                ", Normal";
        } else if (IMC >= 25 && IMC <= 29.9) {
            document.getElementById("aquiRespuesta").innerHTML = "su IMC fue " + Math.round(IMC) +
                ", Sobrepeso";
        } else {
            document.getElementById("aquiRespuesta").innerHTML = "su IMC fue " + Math.round(IMC) +
                ", Obeso debe ir al nutricionista";
        }
    }
}

/* 8: ----- precentaciones_con_nombre
Cree una función que pida el nombre del usuario, y por medio de otra
función imprima el nombre y un mensaje que diga Bienvenido + nombre.
*/

function precentaciones_con_nombre() {
    contenedorLista.innerHTML = `
    <!-- Solo los dos inputs -->
    <div class="formulario" id="formularioSecundario">
        <div class="grupo-input">
            <input 
                type="text" 
                id="nombre" 
                placeholder="Escribe aquí tu nombre"
            >
        </div>
        <div>
            <button onclick="funcion_precentaciones_con_nombre()">calcular</button>
        </div>
        <div id="aquiRespuesta" style="margin-top: 10px; padding: 10px; border-radius: 5px;"></div>
    </div>
`;
}

function funcion_precentaciones_con_nombre() {
    let nombre = document.getElementById("nombre").value;
    class precentacion {
        constructor(nombre) {
            this.nombre = nombre;
        }
        saludar() {
            aquiRespuesta.innerHTML = "Bienvenido " + nombre;
        }
    }

    let precentate = new precentacion();

    precentate.saludar(nombre);

}

/* 9: ----- factura
Cree una función que pida el precio de N productos y por medio de otra función 
aumente el iva del 19% y diga al usuario el precio total a pagar los productos 
que compró y el precio de cada uno.

producto 1 = 3.000
producto 2 = 4.500
producto 3 = 2.500
—---------------------------------
subtotal = 10.000
iva = 1.900
Total A pagar 11.900
*/

function factura() {
    contenedorLista.innerHTML = `
    <!-- Solo los dos inputs -->
    <div class="formulario" id="formularioSecundario">
        <div class="grupo-input">
            <input 
                type="number" 
                id="precio" 
                placeholder="Escribe aquí el precio"
            >
        </div>

        <div class="grupo-input">
            <input 
                type="number" 
                id="numeroProductos" 
                placeholder="numero Productos aquí"
            >
        </div>
        <div>
            <button onclick="calculo_factura()">calcular</button>
        </div>
        <div id="aquiRespuesta" style="margin-top: 10px; padding: 10px; border-radius: 5px;"></div>
    </div>
`;

}

// hacer de nuevo
function calculo_factura() {
    let precio = 0;
    let numeroProductos = document.getElementById("numeroProductos").value || 0;
    let iva = 0;
    let subtotal = 0;
    let total = 0;

    function PRECIOS(index) {
        precio = document.getElementById("precio").value || 0;
    }

    function IVA(index) {
        iva = precio * (19 / 100);
        subtotal = subtotal + precio;

        console.log("Producto #" + (index + 1) + " = " + precio);
    }

    for (let index = 0; index < numeroProductos; index++) {
        PRECIOS(index);
        IVA(index);
    }
    total = iva + subtotal;
    console.log("subtotal: " + subtotal);
    console.log("iva: " + iva);
    console.log("total: " + total);


}

/* 10: fin_año-----
Cree una función que pida la fecha actual y por medio de otra función calcule cuántos días
y semanas faltan para terminar el año.
*/

function Fin_año() {
    const fecha = new Date(prompt("Fecha (YYYY-MM-DD):") || new Date());
    const dias = Math.ceil((new Date(fecha.getFullYear(), 11, 31) - fecha) / 86400000);

    alert(`Días: ${dias}\nSemanas: ${Math.ceil(dias / 7)}`);
}

function calcular_fin_año(){}

/* 11: ---- lista_de_mercado
Cree un listado de compras, con función que pida el número de productos, nombre 
y valordel producto por medio de otra función imprima la información digitadas.

1 - arroz $ 2.500 x 3 = 7.500
2 - aceite $ 4.500 x 1 = 4.500
3 - azúcar $ 2000 x 2 = 4.000
—-----------------------------------
Total Mercado 16.000
*/

function lista_de_mercado() {
    let productos = [];
    let acumulaTotal = 0;

    function reguistrar_productos() { }
    // crea un producto nuevo, no se duplica
    function nuevoProducto(nombre, precio, cantidad) {
        let producto = {
            nombre: nombre,
            precio: precio,
            cantidad: cantidad,
        }
        productos.push(producto);
    }

    // recibe los datos de los produstos
    for (let i = 0; i < 2; i++) {
        let nombre = prompt("ingresa el nombre del producto #" + (i + 1));
        let precio = prompt("ingresa el precio del producto #" + (i + 1));
        let cantidad = prompt("ingresa la cantidad del producto #" + (i + 1));
        nuevoProducto(nombre, precio, cantidad);
    }


    for (let index = 0; index < productos.length; index++) {
        let subtotal = productos[index].precio * productos[index].cantidad
        reguistrar_productos();
        console.log(`el produco #${(index + 1)} - ${productos[index].nombre} vale $${productos[index].precio} * ${productos[index].cantidad} = ${subtotal}`)
        acumulaTotal = acumulaTotal + subtotal
    }

    console.log("toral mercado: " + acumulaTotal)

}


botonAgregar.addEventListener('click', () => {
    let valor = nombreOpcion.value;
    switch (valor) {
        case "1":
            superficie_del_rectangulo()
            break;
        case "2":
            velocidad()
            break;
        case "3":
            circunferencia_circulo()
            break;
        case "4":
            validar_texto()
            break;
        case "5":
            calculadora_basica_completa()
            break;
        case "6":
            conversor_de_temperatura()
            break;
        case "7":
            indise_masa_muscular()
            break;
        case "8":
            precentaciones_con_nombre()
            break;
        case "9":
            factura()
            break;
        case "10":
            Fin_año()
            break;
        case "11":
            lista_de_mercado()
            break;
        case "0":
            alert("porfavor elija una opcion")
            break;
        default:
            break;
    }
})


/*

contenedorLista.innerHTML = `
    <!-- Solo los dos inputs -->
    <div class="formulario" id="formularioSecundario">
        <div class="grupo-input">
            <input 
                type="number" 
                id="input1" 
                placeholder="Escribe aquí el numero 1"
            >
        </div>

        <div class="grupo-input">
            <input 
                type="number" 
                id="input2" 
                placeholder="Escribe aquí el nuemero 2"
            >
        </div>
        <div>
            <button onclick="superficie_del_rectangulo()">calcular</button>
        </div>
        <div id="aquiRespuesta" style="margin-top: 10px; padding: 10px; border-radius: 5px;"></div>
    </div>
`;

*/