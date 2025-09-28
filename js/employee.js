    //----------------------------employee----------------

// 4 

    /*
    calcule el sueldo mensual de un trabajador ingresando el numero de horas trabajadas 
    en el mes y el valor tanto de las horas normales de trabajos y las horas extras
    */

    const horas = Number(prompt("cuantas horas trabajas al dia: ")) ;
    const horaExtras = Number(prompt("trabajaste cuantas horas extras: "));
    const pagosHora = Number(prompt("cuanto te pagan por hora:"));

    const horaMes = horas * 30 ;
    const totalHorasTrabajada = horaMes + horaExtras ;
    const valorHoraTotal = pagosHora * totalHorasTrabajada ;

    alert (
        `horas por dia fueron ${horas} horas al dia
        + las horas extra que fueron ${horaExtras}
        pagos por hora ${pagosHora}
        en total trabajaste ${totalHorasTrabajada} horas
        y ganaste ${valorHoraTotal}$ cop`
    );

// 1 
    /* 
    calcular el salario de un empleado que gana X monto 
    descuente el 4% en salud y 5% en pension 
    */

    alert(`tomando datos de la pregunta 4

        el empleado gana ${valorHoraTotal} al mes 
        pero al sueldo se le descuentan salud 4% y pension 5%

        `)

    let pension = valorHoraTotal * 5/100;
    let salud = valorHoraTotal * 4/100 ;
    let salarioNetoDescuento = valorHoraTotal - pension -salud
    alert(`
        el empleado se le aplico el descuento de ${pension} pension y ${salud} salud
        el ingreso neto es ${salarioNetoDescuento}
        descontando salud y pension`);