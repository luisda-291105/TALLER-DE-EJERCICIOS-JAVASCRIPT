

/* 
_____________________________
___| variables globales |____
_____________________________
*/

// Contador para IDs únicos
let contadorFormularios = 0;

// respuestas dentro de las funciones
let r;

// // taller 1 
// let contenedorOpciones = document.querySelector("#contenedorOpciones");
// let resultado = document.getElementById("resultado");
// let respuestaOperacion = document.getElementById("respuestaOperacion");
// activo la clase del taller 1
// let taller_1_nuevo = new taller_1();

// taller 4
let nombreOpcion = document.getElementById("nombreOpcion");
let botonAgregar = document.getElementById("botonAgregar");
let contenedorLista = document.getElementById("contenedorLista");



/* 
___________________
___| TALLER 1 |____
___________________
*/
class taller_1 {
    constructor(input1, input2, select) {
        this.input1 = input1;
        this.input2 = input2;
        this.select = select.value
    }
    // 1: calcular salario  
    calculo_salario() {

        const horas = Number(prompt("cuantas horas trabajas al dia: "));
        const horaExtras = Number(prompt("trabajaste cuantas horas extras: "));
        const pagosHora = Number(prompt("cuanto te pagan por hora:"));

        const horaMes = horas * 30;
        const totalHorasTrabajada = horaMes + horaExtras;
        const valorHoraTotal = pagosHora * totalHorasTrabajada;

        let pension = valorHoraTotal * 5 / 100;
        let salud = valorHoraTotal * 4 / 100;
        let salarioNetoDescuento = valorHoraTotal - pension - salud;

        resultado.textContent = (
            `${horas}h al dia
        +  ${horaExtras}h extra,
        pagos por hora ${pagosHora}
        en total trabajaste ${totalHorasTrabajada} horas
        y ganaste ${valorHoraTotal}$ cop.
        - salud 4% y pension 5%,
        pension  ${pension}$ cop + salud ${salud}$ cop,
        el ingreso neto es ${salarioNetoDescuento}$ cop
        `);
    };

    // 2: calcular area tiangulo
    calculo_area_triangulo() {
        let numero1 = Number(prompt("porfavor ingrese el primer numero"));
        let numero2 = Number(prompt("ingrese el segundo numero"));

        resultado.textContent = ("el area del triangulo es: " + ((numero1 * numero2) / 2));
    };

    // 3: calculadora

    calculadora() {

        let select = document.getElementById("select");
        let input1 = parseFloat(document.getElementById("numero_${idUnico}").value || 0);
        let input2 = parseFloat(document.getElementById("numero_${idUnico}").value || 0);
        if (select != "" || input1 != 0 || input2 != 0) {

        
        switch (select) {
            case "suma":
                r = input1 + input2;
                document.getElementById("respuesta_${idUnico}").textContent = `la respuesta es ${r}`;
                break;
            case "resta":
                r = input1 - input2;
                document.getElementById("respuesta_${idUnico}").textContent = `la respuesta es ${r}`;
                break;
            case "divicion":
                if (input2 != 0) {
                    r = input2 / input1;
                    document.getElementById("respuesta_${idUnico}").textContent = `la respuesta es ${r}`;
                } else {
                    document.getElementById("respuesta_${idUnico}").textContent = ` no puedes dividir ${input1} entre  ${input2} `;
                }
                break;
            case "multiplicacion":
                r = input1 * input2;
                document.getElementById("respuesta_${idUnico}").textContent = `la respuesta es ${r}`;
                break;
            case "modulo":
                r = input1 % input2;
                document.getElementById("respuesta_${idUnico}").textContent = `la respuesta es ${r}`;
                break;

            default:
                alert("algo salio muy mal");
                break;
        }
    }
    }

    // 4: sueldo mensual

    calculo_salario() {

        const horas = Number(prompt("cuantas horas trabajas al dia: "));
        const horaExtras = Number(prompt("trabajaste cuantas horas extras: "));
        const pagosHora = Number(prompt("cuanto te pagan por hora:"));

        const horaMes = horas * 30;
        const totalHorasTrabajada = horaMes + horaExtras;
        const valorHoraTotal = pagosHora * totalHorasTrabajada;

        let pension = valorHoraTotal * 5 / 100;
        let salud = valorHoraTotal * 4 / 100;
        let salarioNetoDescuento = valorHoraTotal - pension - salud;

        resultado.textContent = (
            `${horas}h al dia
        +  ${horaExtras}h extra,
        pagos por hora ${pagosHora}
        en total trabajaste ${totalHorasTrabajada} horas
        y ganaste ${valorHoraTotal}$ cop.
        - salud 4% y pension 5%,
        pension  ${pension}$ cop + salud ${salud}$ cop,
        el ingreso neto es ${salarioNetoDescuento}$ cop
        `);
    }

    // 5: calculo de iva

    calculo_precio_iva() {
        let preceProduct = Number(prompt("porfavor agrege el precio del producto"));
        let iva = 19 / 100;

        let preceProductIva = preceProduct + iva;
        resultado.textContent = (`el valor del producto es ${preceProduct}
        el iva ha agregar ${iva} %
        total producto + iva ${preceProductIva}
        `)
    };

    // 6: porcentaje de alumnos

    calculo_alumno() {
        let boy = Number(prompt("ingrese el numero de estudiantes del genero masculino"));
        let girl = Number(prompt("ingrese el numero de estudiantes del genero femenido"));

        let alumnos = boy + girl;

        let percentageBoy = boy / alumnos;
        let percentageGirl = girl / alumnos;

        let percentageBoyFinal = percentageBoy * 100;
        let percentagegirlFinal = percentageGirl * 100;

        resultado.textContent = (`el total de alumnos es ${alumnos}
        el numero de hombre es ${boy} en promedio ${percentageBoyFinal}%
        el numero de mujeres es ${girl} en promedio ${percentagegirlFinal}%
        `)
    };

    // 7: promedio de 3 notas

    calculo_promedio_notas() {
        let nota1 = Number(prompt("ingrese la nota"));
        let nota2 = Number(prompt("ingrese la nota"));
        let nota3 = Number(prompt("ingrese la nota"));

        let promedio = (nota1 + nota2 + nota3) / 3;
        resultado.textContent = ("el promedio de la nota del alumno es: " + promedio)
    };

}



function input_calculadora() {

    contadorFormularios++
    const idUnico = `${contadorFormularios}`
    document.getElementById("resultado").innerHTML += `
            <div class="card shadow my-5 mx-auto col-sm-10 col-md-6 col-lg-3" id="${idUnico}">
                <div class="card-header">
                    operacion #${idUnico} calculadora
                </div>
                <div class="card-body gap-3 d-flex flex-column">
                    <div class="input-group flex-nowrap">
                        <input type="number" 
                        class="form-control" 
                        placeholder="ingrese el segundo numero" 
                        min="0"
                        id="numero_${idUnico}">
                    </div>
                    <div>
                        <select id="select" class="form-control w-100">
                            <option value="suma">suma</option>
                            <option value="resta">resta</option>
                            <option value="divicion">divicion</option>
                            <option value="multiplicacion">multiplicacion</option>
                            <option value="modulo">modulo</option>
                        </select>
                    </div>
                    <div class="input-group flex-nowrap">
                        <input type="number" 
                        class="form-control" 
                        placeholder="ingrese el segundo numero" 
                        min="0"
                        id="numero_${idUnico}">
                    </div>
                    <div>
                        <button class="btn btn-outline-success" onclick="" type="button">Calcular</button>
                        <button class="btn btn-outline-danger boton_eliminar" data-form-id="${idUnico}"  type="limpiar">Eliminar</button>
                    </div>
                    <div>
                        <p id="respuesta_${idUnico}"></p>
                    </div>
                </div>
            </div>
        `;


};

/* 
function calculo_resta() {
    nombreOperacion = "resta";
    contadorOperacion++
    document.getElementById("resultado").innerHTML += `
    <div class="card shadow my-5 mx-auto col-sm-10 col-md-6 col-lg-3">
        <div class="card-header">
            operacion #${contadorOperacion} ${nombreOperacion}
        </div>
        <div class="card-body gap-3 d-flex flex-column">
            <div class="input-group flex-nowrap">
                <input type="number" class="form-control" placeholder="ingrese el segundo numero" min="0"
                    id="numero1" aria-label="Username" aria-describedby="addon-wrapping">
            </div>
            <div class="input-group flex-nowrap">
                <input type="number" class="form-control" placeholder="ingrese el segundo numero" min="0"
                    id="numero1" aria-label="Username" aria-describedby="addon-wrapping">
            </div>
            <div>
                <button class="btn btn-outline-success" onclick="d()" type="button">Calcular</button>
                <button class="btn btn-outline-danger" onclick="limpiar()" type="limpiar">Eliminar</button>
            </div>
            <div id="respuestaOperacion"></div>
        </div>
    </div>
    `;
};

function calculo_multi() {
    respuesa = imput2 + imput1;
};

function calculo_divide() {
    if (numero2 != 0) {
        respuesa = imput2 / imput1;
    } else {
        alert("no puedes dividir entre cero '0'")
    }

};

function calculo_modulo() {
    respuesa = imput2 + imput1;
};

function calculo_salario() {

    const horas = Number(prompt("cuantas horas trabajas al dia: "));
    const horaExtras = Number(prompt("trabajaste cuantas horas extras: "));
    const pagosHora = Number(prompt("cuanto te pagan por hora:"));

    const horaMes = horas * 30;
    const totalHorasTrabajada = horaMes + horaExtras;
    const valorHoraTotal = pagosHora * totalHorasTrabajada;

    let pension = valorHoraTotal * 5 / 100;
    let salud = valorHoraTotal * 4 / 100;
    let salarioNetoDescuento = valorHoraTotal - pension - salud;

    resultado.textContent = (
        `${horas}h al dia
        +  ${horaExtras}h extra,
        pagos por hora ${pagosHora}
        en total trabajaste ${totalHorasTrabajada} horas
        y ganaste ${valorHoraTotal}$ cop.
        - salud 4% y pension 5%,
        pension  ${pension}$ cop + salud ${salud}$ cop,
        el ingreso neto es ${salarioNetoDescuento}$ cop
        `);
};

function calculo_precio_iva() {
    let preceProduct = Number(prompt("porfavor agrege el precio del producto"));
    let iva = 19 / 100;

    let preceProductIva = preceProduct + iva;
    resultado.textContent = (`el valor del producto es ${preceProduct}
        el iva ha agregar ${iva} %
        total producto + iva ${preceProductIva}
        `)
};

function calculo_alumno() {
    let boy = Number(prompt("ingrese el numero de estudiantes del genero masculino"));
    let girl = Number(prompt("ingrese el numero de estudiantes del genero femenido"));

    let alumnos = boy + girl;

    let percentageBoy = boy / alumnos;
    let percentageGirl = girl / alumnos;

    let percentageBoyFinal = percentageBoy * 100;
    let percentagegirlFinal = percentageGirl * 100;

    resultado.textContent = (`el total de alumnos es ${alumnos}
        el numero de hombre es ${boy} en promedio ${percentageBoyFinal}%
        el numero de mujeres es ${girl} en promedio ${percentagegirlFinal}%
        `)
};

function calculo_area_triangulo() {
    let numero1 = Number(prompt("porfavor ingrese el primer numero"));
    let numero2 = Number(prompt("ingrese el segundo numero"));

    resultado.textContent = ("el area del triangulo es: " + ((numero1 * numero2) / 2));
};

function calculo_promedio_notas() {
    let nota1 = Number(prompt("ingrese la nota"));
    let nota2 = Number(prompt("ingrese la nota"));
    let nota3 = Number(prompt("ingrese la nota"));

    let promedio = (nota1 + nota2 + nota3) / 3;
    resultado.textContent = ("el promedio de la nota del alumno es: " + promedio)
};
 */
/* 
___________________
___| TALLER 4 |____
___________________
*/




/* 1: superficie_del_rectangulo */
function superficie_del_rectangulo() {
    contadorFormularios++;
    const idUnico = `form_${contadorFormularios}`;

    contenedorLista.innerHTML += `
    <div class="card mb-3" id="${idUnico}">
    <div class="card-header d-flex justify-content-between align-items-center">
        <span>Rectángulo #${contadorFormularios}</span>
        <button class="btn btn-sm btn-outline-danger boton_eliminar" data-form-id="${idUnico}">Eliminar</button>
    </div>
    
    <div class="card-body">
        <div class="mb-3">
            <input 
                type="number" 
                id="ancho_${idUnico}" 
                class="form-control"
                placeholder="Ancho"
            >
        </div>
        
        <div class="mb-3">
            <input 
                type="number" 
                id="alto_${idUnico}" 
                class="form-control"
                placeholder="Alto"
            >
        </div>
        
        <button 
            onclick="calculo_superficie_del_rectangulo('${idUnico}')" 
            class="btn btn-primary w-100">
            Calcular
        </button>
        
        <div id="respuesta_${idUnico}" class="mt-3"></div>
    </div>
</div>
    `;
}

function calculo_superficie_del_rectangulo(idUnico) {
    let ancho = parseFloat(document.getElementById(`ancho_${idUnico}`).value) || 0;
    let alto = parseFloat(document.getElementById(`alto_${idUnico}`).value) || 0;
    let superficie = ancho * alto;

    document.getElementById(`respuesta_${idUnico}`).innerHTML += `
        <p>La superficie del rectángulo es ${superficie.toFixed(2)}</p>
    `;
}

/* 2: velocidad */
function velocidad() {
    contadorFormularios++;
    const idUnico = `form_${contadorFormularios}`;

    contenedorLista.innerHTML += `
    <div class="card mb-3" id="${idUnico}">
    <div class="card-header d-flex justify-content-between align-items-center">
        <span>Conversión de Velocidad #${contadorFormularios}</span>
        <button class="btn btn-sm btn-outline-danger boton_eliminar" data-form-id="${idUnico}">Eliminar</button>
    </div>
    
    <div class="card-body">
        <div class="mb-3">
            <input 
                type="number" 
                id="kilometros_${idUnico}" 
                class="form-control"
                placeholder="Velocidad en km/h"
            >
        </div>
        
        <button 
            onclick="calculo_velocidad('${idUnico}')" 
            class="btn btn-primary w-100">
            Calcular
        </button>
        
        <div id="respuesta_${idUnico}" class="mt-3"></div>
    </div>
</div>
    `;
}

function calculo_velocidad(idUnico) {
    let km_h = parseFloat(document.getElementById(`kilometros_${idUnico}`).value) || 0;
    let m_s = km_h * 0.27778;
    let mph = km_h * 0.621371;

    document.getElementById(`respuesta_${idUnico}`).innerHTML = `
        <p>La conversión de ${km_h} km/h:</p>
        <p>→ ${m_s.toFixed(2)} m/s</p>
        <p>→ ${mph.toFixed(2)} mph</p>
    `;
}

/* 3: circunferencia_circulo */
function circunferencia_circulo() {
    contadorFormularios++;
    const idUnico = `form_${contadorFormularios}`;

    contenedorLista.innerHTML += `
    <div class="card mb-3" id="${idUnico}">
    <div class="card-header d-flex justify-content-between align-items-center">
        <span>Circunferencia del Círculo #${contadorFormularios}</span>
        <button class="btn btn-sm btn-outline-danger boton_eliminar" data-form-id="${idUnico}">Eliminar</button>
    </div>
    
    <div class="card-body">
        <div class="mb-3">
            <input 
                type="number" 
                id="radio_${idUnico}" 
                class="form-control"
                placeholder="Radio del círculo"
            >
        </div>
        
        <button 
            onclick="calculo_circunferencia_circulo('${idUnico}')" 
            class="btn btn-primary w-100">
            Calcular
        </button>
        
        <div id="respuesta_${idUnico}" class="mt-3"></div>
    </div>
</div>
    `;
}

function calculo_circunferencia_circulo(idUnico) {
    const pi = Math.PI;
    let radio = parseFloat(document.getElementById(`radio_${idUnico}`).value) || 0;
    let circunferencia = 2 * pi * radio;
    let cubo = circunferencia * circunferencia * circunferencia;

    document.getElementById(`respuesta_${idUnico}`).innerHTML = `
        <p>La circunferencia del círculo es ${circunferencia.toFixed(2)}</p>
        <p>Y su cubo es ${Math.round(cubo)}</p>
    `;
}

/* 4: validar_texto */
function validar_texto() {
    contadorFormularios++;
    const idUnico = `form_${contadorFormularios}`;

    contenedorLista.innerHTML += `
    <div class="card mb-3" id="${idUnico}">
    <div class="card-header d-flex justify-content-between align-items-center">
        <span>Validar Texto #${contadorFormularios}</span>
        <button class="btn btn-sm btn-outline-danger boton_eliminar" data-form-id="${idUnico}">Eliminar</button>
    </div>
    
    <div class="card-body">
        <div class="mb-3">
            <input 
                type="text" 
                id="nombre_${idUnico}" 
                class="form-control"
                placeholder="Escribe tu nombre"
            >
        </div>
        
        <button 
            onclick="calculo_validar_texto('${idUnico}')" 
            class="btn btn-primary w-100">
            Verificar
        </button>
        
        <div id="respuesta_${idUnico}" class="mt-3"></div>
    </div>
</div>
    `;
}

function calculo_validar_texto(idUnico) {
    let nombre = document.getElementById(`nombre_${idUnico}`).value;

    if (isNaN(nombre) && nombre.trim() !== "") {
        document.getElementById(`respuesta_${idUnico}`).innerHTML =
            `¿Enserio te llamas ${nombre}? ¡Chimba ese nombre!`;
    } else {
        document.getElementById(`respuesta_${idUnico}`).innerHTML =
            "Ingresa un nombre válido";
    }
}

/* 5: calculadora_basica_completa */
function calculadora_basica_completa() {
    contadorFormularios++;
    const idUnico = `form_${contadorFormularios}`;

    contenedorLista.innerHTML += `
    <div class="card mb-3" id="${idUnico}">
    <div class="card-header d-flex justify-content-between align-items-center">
        <span>Calculadora Básica #${contadorFormularios}</span>
        <button class="btn btn-sm btn-outline-danger boton_eliminar" data-form-id="${idUnico}">Eliminar</button>
    </div>
    
    <div class="card-body">
        <div class="mb-3">
            <input 
                type="number" 
                id="numero1_${idUnico}" 
                class="form-control"
                placeholder="Primer número"
                min="0"
            >
        </div>
        
        <div class="mb-3">
            <select id="optionSelect_${idUnico}" class="form-select">
                <option value="nada" hidden>Seleccione una operación</option>
                <option value="suma">Suma</option>
                <option value="resta">Resta</option>
                <option value="divicion">División</option>
                <option value="multi">Multiplicación</option>
            </select>
        </div>
        
        <div class="mb-3">
            <input 
                type="number" 
                id="numero2_${idUnico}" 
                class="form-control"
                placeholder="Segundo número"
                min="0"
            >
        </div>
        
        <button 
            onclick="calculo_calculadora_basica_completa('${idUnico}')" 
            class="btn btn-primary w-100">
            Calcular
        </button>
        
        <div id="respuesta_${idUnico}" class="mt-3"></div>
    </div>
</div>
    `;
}

function calculo_calculadora_basica_completa(idUnico) {
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

    let operacion = document.getElementById(`optionSelect_${idUnico}`).value;
    let numero1 = parseFloat(document.getElementById(`numero1_${idUnico}`).value) || 0;
    let numero2 = parseFloat(document.getElementById(`numero2_${idUnico}`).value) || 0;
    let respuesta;
    let calculadora = new calculadora_basica(numero1, numero2);

    switch (operacion) {
        case "suma":
            respuesta = calculadora.suma();
            document.getElementById(`respuesta_${idUnico}`).innerHTML = `La suma dio: ${respuesta}`;
            break;
        case "resta":
            respuesta = calculadora.resta();
            document.getElementById(`respuesta_${idUnico}`).innerHTML = `La resta dio: ${respuesta}`;
            break;
        case "divicion":
            respuesta = calculadora.divide();
            document.getElementById(`respuesta_${idUnico}`).innerHTML = `La división dio: ${respuesta}`;
            break;
        case "multi":
            respuesta = calculadora.multi();
            document.getElementById(`respuesta_${idUnico}`).innerHTML = `La multiplicación dio: ${respuesta}`;
            break;
        default:
            alert("Inténtelo de nuevo");
            break;
    }
}

/* 6: conversor_de_temperatura */
function conversor_de_temperatura() {
    contadorFormularios++;
    const idUnico = `form_${contadorFormularios}`;

    contenedorLista.innerHTML += `
    <div class="card mb-3" id="${idUnico}">
    <div class="card-header d-flex justify-content-between align-items-center">
        <span>Conversor de Temperatura #${contadorFormularios}</span>
        <button class="btn btn-sm btn-outline-danger boton_eliminar" data-form-id="${idUnico}">Eliminar</button>
    </div>

    <div class="card-body">
        <!-- Input de temperatura -->
        <div class="mb-3">
            <input 
                type="number" 
                id="temperaturaInput_${idUnico}" 
                class="form-control"
                placeholder="Temperatura"
                min="-100"
                max="1000"
            >
        </div>

        <!-- Selector de conversión -->
        <div class="mb-3">
            <select id="optionSelect_${idUnico}" class="form-select">
                <option value="0" hidden>Seleccione una conversión</option>
                <option value="1">Celsius a Fahrenheit</option>
                <option value="2">Fahrenheit a Celsius</option>
            </select>
        </div>

        <!-- Botón calcular -->
        <button 
            onclick="calculo_conversor_de_temperatura('${idUnico}')" 
            class="btn btn-primary w-100">
            Calcular
        </button>

        <!-- Resultado -->
        <div id="respuesta_${idUnico}" class="mt-3 p-2 border rounded text-center"></div>
    </div>
</div>

    `;
}

function calculo_conversor_de_temperatura(idUnico) {
    let temperaturaInput = parseFloat(document.getElementById(`temperaturaInput_${idUnico}`).value) || 0;
    let operacion = document.getElementById(`optionSelect_${idUnico}`).value;
    let f = 0;
    let c = 0;

    if (operacion == 1) {
        f = (temperaturaInput * (9 / 5)) + 32;
        c = temperaturaInput;
    } else if (operacion == 2) {
        c = (temperaturaInput - 32) * 5 / 9;
        f = temperaturaInput;
    }

    if (operacion == 1 || operacion == 2) {
        let mensaje = "";
        if (c < 0 || f < 32) {
            mensaje = "🥶 Nos congelamos";
        } else if ((c >= 5 && c <= 15) || (f >= 33 && f <= 50)) {
            mensaje = "❄️ Está haciendo frío";
        } else if ((c >= 16 && c <= 25) || (f >= 51 && f <= 77)) {
            mensaje = "😊 Está templado el día";
        } else {
            mensaje = "🔥 Tiene fiebre o es el apocalipsis";
        }

        document.getElementById(`respuesta_${idUnico}`).innerHTML = `
            <p>${operacion == 1 ? Math.round(f) + "°F" : Math.round(c) + "°C"}</p>
            <p>${mensaje}</p>
        `;
    } else {
        document.getElementById(`respuesta_${idUnico}`).innerHTML = "Inténtelo de nuevo";
    }
}

/* 7: indice_masa_muscular */
function indise_masa_muscular() {
    contadorFormularios++;
    const idUnico = `form_${contadorFormularios}`;

    contenedorLista.innerHTML += `
    <div class="card mb-3" id="${idUnico}">
    <div class="card-header d-flex justify-content-between align-items-center">
        <span>Índice de Masa Corporal #${contadorFormularios}</span>
        <button class="btn btn-sm btn-outline-danger boton_eliminar" data-form-id="${idUnico}">Eliminar</button>
    </div>

    <div class="card-body">
        <!-- Peso -->
        <div class="mb-3">
            <input 
                type="number" 
                id="peso_${idUnico}" 
                class="form-control"
                placeholder="Peso en kilogramos"
                min="1"
                step="0.1"
            >
        </div>

        <!-- Altura -->
        <div class="mb-3">
            <input 
                type="number" 
                id="altura_${idUnico}" 
                class="form-control"
                placeholder="Altura en metros (ej: 1.75)"
                min="0.5"
                step="0.01"
            >
        </div>

        <!-- Botón Calcular -->
        <button 
            onclick="calculo_indise_masa_muscular('${idUnico}')" 
            class="btn btn-primary w-100">
            Calcular
        </button>

        <!-- Resultado -->
        <div id="respuesta_${idUnico}" class="mt-3 p-2 border rounded text-center"></div>
    </div>
</div>

    `;
}

function calculo_indise_masa_muscular(idUnico) {
    let peso = parseFloat(document.getElementById(`peso_${idUnico}`).value) || 0;
    let altura = parseFloat(document.getElementById(`altura_${idUnico}`).value) || 0;

    if (peso <= 0 || altura <= 0) {
        document.getElementById(`respuesta_${idUnico}`).innerHTML = "Su información es incorrecta";
        return;
    }

    let IMC = peso / (altura * altura);
    let mensaje = "";

    if (IMC < 18.5) {
        mensaje = "Bajo peso - debe ir al nutricionista";
    } else if (IMC >= 18.5 && IMC <= 24.9) {
        mensaje = "Normal";
    } else if (IMC >= 25 && IMC <= 29.9) {
        mensaje = "Sobrepeso";
    } else {
        mensaje = "Obeso - debe ir al nutricionista";
    }

    document.getElementById(`respuesta_${idUnico}`).innerHTML = `
        <p>Su IMC es: <strong>${IMC.toFixed(1)}</strong></p>
        <p>${mensaje}</p>
    `;
}

/* 8: presentaciones_con_nombre */
function precentaciones_con_nombre() {
    contadorFormularios++;
    const idUnico = `form_${contadorFormularios}`;

    contenedorLista.innerHTML += `
    <div class="card mb-3" id="${idUnico}">
    <div class="card-header d-flex justify-content-between align-items-center">
        <span>Presentación #${contadorFormularios}</span>
        <button class="btn btn-sm btn-outline-danger boton_eliminar" data-form-id="${idUnico}">Eliminar</button>
    </div>

    <div class="card-body">
        <!-- Nombre -->
        <div class="mb-3">
            <input 
                type="text" 
                id="nombre_${idUnico}" 
                class="form-control"
                placeholder="Escribe tu nombre"
            >
        </div>

        <!-- Botón Saludar -->
        <button 
            onclick="funcion_precentaciones_con_nombre('${idUnico}')" 
            class="btn btn-primary w-100">
            Saludar
        </button>

        <!-- Resultado -->
        <div id="respuesta_${idUnico}" class="mt-3 p-2 border rounded text-center"></div>
    </div>
</div>

    `;
}

function funcion_precentaciones_con_nombre(idUnico) {
    let nombre = document.getElementById(`nombre_${idUnico}`).value;

    class presentacion {
        constructor(nombre) {
            this.nombre = nombre;
        }
        saludar() {
            return `Bienvenido ${this.nombre}`;
        }
    }

    let presentate = new presentacion(nombre);
    document.getElementById(`respuesta_${idUnico}`).innerHTML = presentate.saludar();
}

/* 9: factura */
function factura() {
    contadorFormularios++;
    const idUnico = `form_${contadorFormularios}`;

    contenedorLista.innerHTML += `
    <div class="card mb-3" id="${idUnico}">
    <div class="card-header d-flex justify-content-between align-items-center">
        <span>Factura #${contadorFormularios}</span>
        <button class="btn btn-sm btn-outline-danger boton_eliminar" data-form-id="${idUnico}">Eliminar</button>
    </div>

    <div class="card-body">
        <!-- Número de productos -->
        <div class="mb-3">
            <input 
                type="number" 
                id="numeroProductos_${idUnico}" 
                class="form-control"
                placeholder="Número de productos"
                min="0"
            >
        </div>

        <!-- Botón Aceptar -->
        <button 
            onclick="generarInputs('${idUnico}')" 
            class="btn btn-primary w-100 mb-3">
            Aceptar
        </button>

        <!-- Contenedor dinámico de productos -->
        <div id="listaPrecios_${idUnico}" class="mt-2"></div>

        <!-- Resultado de la factura -->
        <div id="respuesta_${idUnico}" class="mt-3 p-2 border rounded text-center"></div>
    </div>
</div>

    `;
}

function generarInputs(idUnico) {
    let numeroProductos = parseInt(document.getElementById(`numeroProductos_${idUnico}`).value);
    let lista = document.getElementById(`listaPrecios_${idUnico}`);

    lista.innerHTML = "";

    for (let i = 0; i < numeroProductos; i++) {
        lista.innerHTML += `
            <div class="mb-3">
    <input 
        type="number" 
        class="form-control"
        id="precio${i}_${idUnico}" 
        placeholder="Precio del producto #${i + 1}"
        min="0"
        step="0.01"
    >
</div>

        `;
    }

    lista.innerHTML += `
        <button onclick="calculo_factura(${numeroProductos}, '${idUnico}')" class="boton">Calcular factura</button>
    `;
}

function calculo_factura(numeroProductos, idUnico) {
    let subtotal = 0;

    for (let i = 0; i < numeroProductos; i++) {
        let precio = parseFloat(document.getElementById(`precio${i}_${idUnico}`).value) || 0;
        subtotal += precio;
    }

    let iva = subtotal * 0.19;
    let total = subtotal + iva;

    document.getElementById(`respuesta_${idUnico}`).innerHTML = `
        <p><strong>Subtotal:</strong> $${subtotal.toFixed(2)}</p>
        <p><strong>IVA (19%):</strong> $${iva.toFixed(2)}</p>
        <p><strong>Total a pagar:</strong> $${total.toFixed(2)}</p>
    `;
}

/* 10: fin_año */
function Fin_año() {
    contadorFormularios++;
    const idUnico = `form_${contadorFormularios}`;

    contenedorLista.innerHTML += `
    <div class="card mb-3" id="${idUnico}">
    <div class="card-header d-flex justify-content-between align-items-center">
        <span>Días hasta Fin de Año #${contadorFormularios}</span>
        <button class="btn btn-sm btn-outline-danger boton_eliminar" data-form-id="${idUnico}">Eliminar</button>
    </div>

    <div class="card-body">
        <!-- Campo de fecha -->
        <div class="mb-3">
            <label for="hoy_${idUnico}" class="form-label">Fecha (YYYY-MM-DD)</label>
            <input 
                type="date" 
                id="hoy_${idUnico}" 
                class="form-control"
            >
        </div>

        <!-- Botón calcular -->
        <button 
            onclick="calcular_fin_año('${idUnico}')" 
            class="btn btn-primary w-100">
            Calcular
        </button>

        <!-- Resultado -->
        <div id="respuesta_${idUnico}" class="mt-3 p-2 border rounded text-center"></div>
    </div>
</div>

    `;
}

function calcular_fin_año(idUnico) {
    let hoy = document.getElementById(`hoy_${idUnico}`).value;
    const fecha = hoy ? new Date(hoy) : new Date();
    const finDeAño = new Date(fecha.getFullYear(), 11, 31);
    const dias = Math.ceil((finDeAño - fecha) / 86400000);

    document.getElementById(`respuesta_${idUnico}`).innerHTML = `
        <p>Faltan:</p>
        <p><strong>${dias}</strong> días</p>
        <p><strong>${Math.ceil(dias / 7)}</strong> semanas</p>
    `;
}

/* 11: lista_de_mercado */
let listasProductos = {};

function lista_de_mercado() {
    contadorFormularios++;
    const idUnico = `form_${contadorFormularios}`;
    listasProductos[idUnico] = [];

    contenedorLista.innerHTML += `
    <div class="card mb-3" id="${idUnico}">
    <div class="card-header d-flex justify-content-between align-items-center">
        <span>Lista de Mercado #${contadorFormularios}</span>
        <button class="btn btn-sm btn-outline-danger boton_eliminar" data-form-id="${idUnico}">Eliminar</button>
    </div>

    <div class="card-body">
        <!-- Nombre del producto -->
        <div class="mb-3">
            <label for="nombreProducto_${idUnico}" class="form-label">Nombre del producto</label>
            <input 
                type="text" 
                id="nombreProducto_${idUnico}" 
                class="form-control"
                placeholder="Ej: Arroz"
            >
        </div>

        <!-- Precio unitario -->
        <div class="mb-3">
            <label for="precioProducto_${idUnico}" class="form-label">Precio unitario</label>
            <input 
                type="number" 
                id="precioProducto_${idUnico}" 
                class="form-control"
                placeholder="Ej: 2500"
                min="0"
                step="0.01"
            >
        </div>

        <!-- Cantidad -->
        <div class="mb-3">
            <label for="cantidadProducto_${idUnico}" class="form-label">Cantidad</label>
            <input 
                type="number" 
                id="cantidadProducto_${idUnico}" 
                class="form-control"
                placeholder="Ej: 2"
                min="1"
            >
        </div>

        <!-- Botón agregar producto -->
        <button 
            onclick="crea_lista_de_mercado('${idUnico}')" 
            class="btn btn-primary w-100 mb-2">
            Agregar producto
        </button>

        <!-- Resultado -->
        <div id="respuesta_${idUnico}" class="mt-3 p-2 border rounded text-center"></div>
    </div>
</div>

    `;
}

function crea_lista_de_mercado(idUnico) {
    let nombreProducto = document.getElementById(`nombreProducto_${idUnico}`).value.trim();
    let precioProducto = parseFloat(document.getElementById(`precioProducto_${idUnico}`).value) || 0;
    let cantidadProducto = parseInt(document.getElementById(`cantidadProducto_${idUnico}`).value) || 0;

    if (nombreProducto === "" || precioProducto <= 0 || cantidadProducto <= 0) {
        alert("Por favor ingresa datos válidos para todos los campos.");
        return;
    }

    let producto = {
        nombre: nombreProducto,
        precio: precioProducto,
        cantidad: cantidadProducto,
        subtotal: precioProducto * cantidadProducto
    };

    listasProductos[idUnico].push(producto);

    let totalMercado = 0;
    listasProductos[idUnico].forEach(p => totalMercado += p.subtotal);

    let salidaHTML = "<h4>Lista de mercado:</h4><ul>";
    listasProductos[idUnico].forEach((p, i) => {
        salidaHTML += `
            <li>
                #${i + 1} - ${p.nombre}: 
                ${p.cantidad} x $${p.precio.toLocaleString()} 
                = <strong>$${p.subtotal.toLocaleString()}</strong>
            </li>`;
    });
    salidaHTML += `</ul><p><strong>Total:</strong> $${totalMercado.toLocaleString()}</p>`;

    document.getElementById(`respuesta_${idUnico}`).innerHTML = salidaHTML;

    document.getElementById(`nombreProducto_${idUnico}`).value = "";
    document.getElementById(`precioProducto_${idUnico}`).value = "";
    document.getElementById(`cantidadProducto_${idUnico}`).value = "";
}

// Evento principal del selector
botonAgregar.addEventListener('click', () => {
    let valor = nombreOpcion.value;
    switch (valor) {
        case "1":
            superficie_del_rectangulo();
            break;
        case "2":
            velocidad();
            break;
        case "3":
            circunferencia_circulo();
            break;
        case "4":
            validar_texto();
            break;
        case "5":
            calculadora_basica_completa();
            break;
        case "6":
            conversor_de_temperatura();
            break;
        case "7":
            indise_masa_muscular();
            break;
        case "8":
            precentaciones_con_nombre();
            break;
        case "9":
            factura();
            break;
        case "10":
            Fin_año();
            break;
        case "11":
            lista_de_mercado();
            break;
        case "0":
            alert("Por favor elija una opción");
            break;
        default:
            break;
    }
});


/* 
___________________
___| limpiar |____
___________________
*/

function limpiar_salida_taller_4() {
    contenedorLista.innerHTML = "";
};
function limpiar_salida_taller_1() {
    resultado.innerHTML = "";
};

// Event Delegation para eliminar formularios
contenedorLista.addEventListener('click', (e) => {
    if (e.target.classList.contains('boton_eliminar')) {
        if (confirm('¿Estás seguro de eliminar este formulario?')) {
            const formId = e.target.getAttribute('data-form-id');
            const formulario = document.getElementById(formId);
            if (formulario) {
                formulario.remove();
                console.log(`Formulario ${formId} eliminado`);
            }
        }
    }
});
// Event Delegation para eliminar formularios
resultado.addEventListener('click', (e) => {
    if (e.target.classList.contains('boton_eliminar')) {
        if (confirm('¿Estás seguro de eliminar este formulario?')) {
            const formId = e.target.getAttribute('data-form-id');
            const formulario = document.getElementById(formId);
            if (formulario) {
                formulario.remove();
                console.log(`Formulario ${formId} eliminado`);
            }
        }
    }
});