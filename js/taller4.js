// Variables globales
let nombreOpcion = document.getElementById("nombreOpcion");
let botonAgregar = document.getElementById("botonAgregar");
let contenedorLista = document.getElementById("contenedorLista");

// Contador para IDs únicos
let contadorFormularios = 0;

/* 1: superficie_del_rectangulo */
function superficie_del_rectangulo() {
    contadorFormularios++;
    const idUnico = `form_${contadorFormularios}`;
    
    contenedorLista.innerHTML += `
    <div class="formulario" id="${idUnico}">
        <h3>Superficie del Rectángulo #${contadorFormularios}</h3>
        <div class="grupo-input">
            <input 
                type="number" 
                id="ancho_${idUnico}" 
                placeholder="Ancho"
            >
        </div>
        <div class="grupo-input">
            <input 
                type="number" 
                id="alto_${idUnico}" 
                placeholder="Alto"
            >
        </div>
        <div>
            <button class="boton_eliminar" data-form-id="${idUnico}">eliminar</button>
            <button onclick="calculo_superficie_del_rectangulo('${idUnico}')" class="boton">calcular</button>
        </div>
        <div id="respuesta_${idUnico}" style="margin-top: 10px; padding: 10px; border-radius: 5px;"></div>
    </div>
    `;
}

function calculo_superficie_del_rectangulo(idUnico) {
    let ancho = parseFloat(document.getElementById(`ancho_${idUnico}`).value) || 0;
    let alto = parseFloat(document.getElementById(`alto_${idUnico}`).value) || 0;
    let superficie = ancho * alto;
    
    document.getElementById(`respuesta_${idUnico}`).innerHTML += `
        <p>La superficie del rectángulo es ${superficie}</p>
    `;
}

/* 2: velocidad */
function velocidad() {
    contadorFormularios++;
    const idUnico = `form_${contadorFormularios}`;
    
    contenedorLista.innerHTML += `
    <div class="formulario" id="${idUnico}">
        <h3>Conversión de Velocidad #${contadorFormularios}</h3>
        <div class="grupo-input">
            <input 
                type="number" 
                id="kilometros_${idUnico}" 
                placeholder="Velocidad en km/h"
            >
        </div>
        <div>
            <button class="boton_eliminar" data-form-id="${idUnico}">eliminar</button>
            <button onclick="calculo_velocidad('${idUnico}')" class="boton">calcular</button>
        </div>
        <div id="respuesta_${idUnico}" style="margin-top: 10px; padding: 10px; border-radius: 5px;"></div>
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
    <div class="formulario" id="${idUnico}">
        <h3>Circunferencia del Círculo #${contadorFormularios}</h3>
        <div class="grupo-input">
            <input 
                type="number" 
                id="radio_${idUnico}" 
                placeholder="Radio del círculo"
            >
        </div>
        <div>
            <button class="boton_eliminar" data-form-id="${idUnico}">eliminar</button>
            <button onclick="calculo_circunferencia_circulo('${idUnico}')" class="boton">calcular</button>
        </div>
        <div id="respuesta_${idUnico}" style="margin-top: 10px; padding: 10px; border-radius: 5px;"></div>
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
    <div class="formulario" id="${idUnico}">
        <h3>Validar Texto #${contadorFormularios}</h3>
        <div class="grupo-input">
            <input 
                type="text" 
                id="nombre_${idUnico}" 
                placeholder="Escribe tu nombre"
            >
        </div>
        <div>
            <button class="boton_eliminar" data-form-id="${idUnico}">eliminar</button>
            <button onclick="calculo_validar_texto('${idUnico}')" class="boton">verificar</button>
        </div>
        <div id="respuesta_${idUnico}" style="margin-top: 10px; padding: 10px; border-radius: 5px;"></div>
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
    <div class="formulario" id="${idUnico}">
        <h3>Calculadora Básica #${contadorFormularios}</h3>
        <div class="grupo-input">
            <input 
                type="number" 
                id="numero1_${idUnico}" 
                placeholder="Primer número"
                min="0"
            >
        </div>
        <div>
            <select id="optionSelect_${idUnico}">
                <option value="nada" hidden>Operaciones</option>
                <option value="suma">Suma</option>
                <option value="resta">Resta</option>
                <option value="divicion">División</option>
                <option value="multi">Multiplicación</option>
            </select>
        </div>
        <div class="grupo-input">
            <input 
                type="number" 
                id="numero2_${idUnico}" 
                placeholder="Segundo número"
                min="0"
            >
        </div>
        <div>
            <button class="boton_eliminar" data-form-id="${idUnico}">eliminar</button>
            <button onclick="calculo_calculadora_basica_completa('${idUnico}')" class="boton">calcular</button>
        </div>
        <div id="respuesta_${idUnico}" style="margin-top: 10px; padding: 10px; border-radius: 5px;"></div>
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
    <div class="formulario" id="${idUnico}">
        <h3>Conversor de Temperatura #${contadorFormularios}</h3>
        <div class="grupo-input">
            <input 
                type="number" 
                id="temperaturaInput_${idUnico}" 
                placeholder="Temperatura"
            >
        </div>
        <div>
            <select id="optionSelect_${idUnico}">
                <option value="0" hidden>C° o F°</option>
                <option value="1">Celsius a Fahrenheit</option>
                <option value="2">Fahrenheit a Celsius</option>
            </select>
        </div>
        <div>
            <button class="boton_eliminar" data-form-id="${idUnico}">eliminar</button>
            <button onclick="calculo_conversor_de_temperatura('${idUnico}')" class="boton">calcular</button>
        </div>
        <div id="respuesta_${idUnico}" style="margin-top: 10px; padding: 10px; border-radius: 5px;"></div>
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
    <div class="formulario" id="${idUnico}">
        <h3>Índice de Masa Corporal #${contadorFormularios}</h3>
        <div class="grupo-input">
            <input 
                type="number" 
                id="peso_${idUnico}" 
                placeholder="Peso en kg"
            >
        </div>
        <div class="grupo-input">
            <input 
                type="number" 
                id="altura_${idUnico}" 
                placeholder="Altura en metros (ej: 1.75)"
            >
        </div>
        <div>
            <button class="boton_eliminar" data-form-id="${idUnico}">eliminar</button>
            <button onclick="calculo_indise_masa_muscular('${idUnico}')" class="boton">calcular</button>
        </div>
        <div id="respuesta_${idUnico}" style="margin-top: 10px; padding: 10px; border-radius: 5px;"></div>
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
    <div class="formulario" id="${idUnico}">
        <h3>Presentación #${contadorFormularios}</h3>
        <div class="grupo-input">
            <input 
                type="text" 
                id="nombre_${idUnico}" 
                placeholder="Escribe tu nombre"
            >
        </div>
        <div>
            <button class="boton_eliminar" data-form-id="${idUnico}">eliminar</button>
            <button onclick="funcion_precentaciones_con_nombre('${idUnico}')" class="boton">saludar</button>
        </div>
        <div id="respuesta_${idUnico}" style="margin-top: 10px; padding: 10px; border-radius: 5px;"></div>
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
    <div class="formulario" id="${idUnico}">
        <h3>Factura #${contadorFormularios}</h3>
        <div class="grupo-input">
            <input 
                min="0"
                type="number" 
                id="numeroProductos_${idUnico}" 
                placeholder="Número de productos"
            >
        </div>
        <div>
            <button class="boton_eliminar" data-form-id="${idUnico}">eliminar</button>
            <button onclick="generarInputs('${idUnico}')" class="boton">Aceptar</button>
        </div>
        <div id="listaPrecios_${idUnico}" style="margin-top: 10px;"></div>
        <div id="respuesta_${idUnico}" style="margin-top: 10px; padding: 10px; border-radius: 5px;"></div>
    </div>
    `;
}

function generarInputs(idUnico) {
    let numeroProductos = parseInt(document.getElementById(`numeroProductos_${idUnico}`).value);
    let lista = document.getElementById(`listaPrecios_${idUnico}`);

    lista.innerHTML = "";

    for (let i = 0; i < numeroProductos; i++) {
        lista.innerHTML += `
            <div class="grupo-input">
                <input 
                    type="number" 
                    min="0"
                    id="precio${i}_${idUnico}" 
                    placeholder="Precio del producto #${i + 1}"
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
    <div class="formulario" id="${idUnico}">
        <h3>Días hasta Fin de Año #${contadorFormularios}</h3>
        <div class="grupo-input">
            <label for="hoy_${idUnico}">Fecha (YYYY-MM-DD)</label><br>
            <input 
                type="date" 
                id="hoy_${idUnico}"
            >
        </div>
        <div>
            <button class="boton_eliminar" data-form-id="${idUnico}">eliminar</button>
            <button onclick="calcular_fin_año('${idUnico}')" class="boton">calcular</button>
        </div>
        <div id="respuesta_${idUnico}" style="margin-top: 10px; padding: 10px; border-radius: 5px;"></div>
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
    <div class="formulario" id="${idUnico}">
        <h3>Lista de Mercado #${contadorFormularios}</h3>
        <div class="grupo-input">
            <label for="nombreProducto_${idUnico}">Nombre del producto</label>
            <input 
                type="text" 
                id="nombreProducto_${idUnico}" 
                placeholder="Ej: Arroz"
            >
        </div>
        <div class="grupo-input">
            <label for="precioProducto_${idUnico}">Precio unitario</label>
            <input 
                type="number" 
                id="precioProducto_${idUnico}" 
                placeholder="Ej: 2500"
            >
        </div>
        <div class="grupo-input">
            <label for="cantidadProducto_${idUnico}">Cantidad</label>
            <input 
                type="number" 
                id="cantidadProducto_${idUnico}" 
                placeholder="Ej: 2"
            >
        </div>
        <div>
            <button class="boton_eliminar" data-form-id="${idUnico}">eliminar</button>
            <button onclick="crea_lista_de_mercado('${idUnico}')" class="boton">Agregar producto</button>
        </div>
        <div id="respuesta_${idUnico}" style="margin-top: 10px; padding: 10px; border-radius: 5px;"></div>
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