let operador = document.getElementById("operacion");
let botonIgual = document.getElementById("botonIgual");

let imput1 = document.getElementById("numeros2");
let imput2 = document.getElementById("numeros1");
let resultado = document.getElementById("resultado");


function Sumar(imput1, imput2) {
    return imput2 + imput1;
}

function restar(imput1, imput2) {
    return imput2 - imput1;
}

function multiplicar(imput1, imput2) {
    return imput2 * imput1;
}

function divide(imput1, imput2) {

    if (numero2 != 0) {
        return imput2 / imput1;
    } else {
        alert("no puedes dividir entre cero '0'")
    }

}

function mod(imput1, imput2) {
    return imput1 % imput2;
}

function limpiar() {
    resultado.textContent = "resultado";
}

function calculateSalary() {

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

function product() {
    let preceProduct = Number(prompt("porfavor agrege el precio del producto"));
    let iva = (  preceProduct * 0.19) ;

    let preceProductIva = preceProduct + iva ;
    
    resultado.textContent = (`el valor del producto es ${preceProduct}
        el iva ha agregar ${iva} 
        total producto + iva ${preceProductIva}
        `)
}

function alumnos() {
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



}

function areaTriangulo() {
    let numero1 = Number(prompt("porfavor ingrese el primer numero"));
    let numero2 = Number(prompt("ingrese el segundo numero"));

    resultado.textContent = ("el area del triangulo es: " + ((numero1 * numero2) / 2));
}

function notas() {
    let nota1 = Number(prompt("ingrese la nota"));
    let nota2 = Number(prompt("ingrese la nota"));
    let nota3 = Number(prompt("ingrese la nota"));

    let promedio = (nota1 + nota2 + nota3) / 3;
    resultado.textContent = ("el promedio de la nota del alumno es: " + promedio)
}

// tengo poblemas, los botones al recojer numeros y operaciones , menos igual y con funciones fijas

botonIgual.addEventListener('click', () => {

    let n1 = Number(imput1.value);
    let n2 = Number(imput2.value);
    let r;
    switch (operador.value) {
        case "suma":
            r = Sumar(n1, n2);
            break
        case "resta":
            r = restar(n1, n2)
            break
        case "multiplicar":
            r = multiplicar(n1, n2);
            break
        case "divicion":
            r = divide(n1, n2)
            break
        case "modulo":
            r = mod(n1, n2);
            break;
        default: alert("intenta de nuevo");
    }
    resultado.textContent = "el resultado es: " + r;
})

// boton.addEventListener('click', () => {
//     let n1 = Number(imput1.value);
//     let n2 = Number(imput2.value);
//     let r;

//     r = Sumar(n1 , n2)

//     resultado.textContent = " resultado "+r;
// })
