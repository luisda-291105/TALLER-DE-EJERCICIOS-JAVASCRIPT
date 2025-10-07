// respueta de la pregunta 8
/* 
dia            costo 
1 o menos      = 20_000
entre 2 a 4    = 30_000 * dias
entre 5 a 7    = 25_000 * dias
8 o mas        = 15_000 * dias

dias           sobre cargo 
i o menos      =   0
2 a 4          =   0
5 a 7          =   5%
8 mas          =   10%
*/
let reTaller2 = document.querySelector("#reTaller2");
let btn = document.querySelector("#btn");

let edad = Number(prompt("ingrese su edad"))
let dias = Number(prompt("ingrese el numero de dias"))

    if (edad >= 0 && edad <= 10) {

        if (dias <= 1) {
            let costoDias = 20_000;
            let sobrecargo = 0;
            let totalPagar = costoDias + sobrecargo;

            alert( `los dias de hospitalizacion fueron ${dias} dias
                como tienes ${edad} años el valor del dia esta en ${costoDias}$ 
                y en recargos fueron ${sobrecargo} 
                en total a pagar son ${totalPagar}`)
        } 
        
        else if (dias >= 2 && dias <= 4) {
            let costoDias = 30_000;
            let sobrecargo = 0;
            let totalPagar = costoDias + sobrecargo;

            alert( `los dias de hospitalizacion fueron ${dias} dias
                como tienes ${edad} años el valor del dia esta en ${costoDias}$ 
                y en recargos fueron ${sobrecargo} 
                en total a pagar son ${totalPagar}`)
        } 
        
        else if (dias >= 5 && dias <= 7) {
            let costoDias = 25_000;
            let sobrecargo = 0.05 * costoDias;
            let totalPagar = costoDias + sobrecargo;

            alert(`los dias de hospitalizacion fueron ${dias} dias
                como tienes ${edad} años el valor del dia esta en ${costoDias}$ 
                y en recargos fueron ${sobrecargo} 
                en total a pagar son ${totalPagar}`)
        } 
        
        else {
            let costoDias = 15_000;
            let sobrecargo = 0.10 * costoDias;
            let totalPagar = costoDias + sobrecargo;

            alert(`los dias de hospitalizacion fueron ${dias} dias
                como tienes ${edad} años el valor del dia esta en ${costoDias}$ 
                y en recargos fueron ${sobrecargo} 
                en total a pagar son ${totalPagar}`)
        }
    } 

    else if (edad >= 11 && edad <= 17) {

        if (dias <= 1) {
            let costoDias = 20_000;
            let sobrecargo = 0;
            let totalPagar = costoDias + sobrecargo;

            alert(`los dias de hospitalizacion fueron ${dias} dias
                como tienes ${edad} años el valor del dia esta en ${costoDias}$ 
                y en recargos fueron ${sobrecargo} 
                en total a pagar son ${totalPagar}`)
        } 
        
        else if (dias >= 2 && dias <= 4) {
            let costoDias = 30_000;
            let sobrecargo = 0;
            let totalPagar = costoDias + sobrecargo;

            alert(`los dias de hospitalizacion fueron ${dias} dias
                como tienes ${edad} años el valor del dia esta en ${costoDias}$ 
                y en recargos fueron ${sobrecargo} 
                en total a pagar son ${totalPagar}`)
        } 
        
        else if (dias >= 5 && dias <= 7) {
            let costoDias = 25_000;
            let sobrecargo = 0.05 * costoDias;
            let totalPagar = costoDias + sobrecargo;

            alert(`los dias de hospitalizacion fueron ${dias} dias
                como tienes ${edad} años el valor del dia esta en ${costoDias}$ 
                y en recargos fueron ${sobrecargo} 
                en total a pagar son ${totalPagar}`)
        } 
        
        else {
            let costoDias = 15_000;
            let sobrecargo = 0.10 * costoDias;
            let totalPagar = costoDias + sobrecargo;

            alert(`los dias de hospitalizacion fueron ${dias} dias
                como tienes ${edad} años el valor del dia esta en ${costoDias}$ 
                y en recargos fueron ${sobrecargo} 
                en total a pagar son ${totalPagar}`)
        }
    } 

    else if (edad >= 18 && edad <= 49) {

        if (dias <= 1) {
            let costoDias = 20_000;
            let sobrecargo = 0;
            let totalPagar = costoDias + sobrecargo;

            alert(`los dias de hospitalizacion fueron ${dias} dias
                como tienes ${edad} años el valor del dia esta en ${costoDias}$ 
                y en recargos fueron ${sobrecargo} 
                en total a pagar son ${totalPagar}`)
        } 
        
        else if (dias >= 2 && dias <= 4) {
            let costoDias = 30_000;
            let sobrecargo = 0;
            let totalPagar = costoDias + sobrecargo;

            alert(`los dias de hospitalizacion fueron ${dias} dias
                como tienes ${edad} años el valor del dia esta en ${costoDias}$ 
                y en recargos fueron ${sobrecargo} 
                en total a pagar son ${totalPagar}`)
        } 
        
        else if (dias >= 5 && dias <= 7) {
            let costoDias = 25_000;
            let sobrecargo = 0.05 * costoDias;
            let totalPagar = costoDias + sobrecargo;

            alert(`los dias de hospitalizacion fueron ${dias} dias
                como tienes ${edad} años el valor del dia esta en ${costoDias}$ 
                y en recargos fueron ${sobrecargo} 
                en total a pagar son ${totalPagar}`)
        } 
        
        else {
            let costoDias = 15_000;
            let sobrecargo = 0.10 * costoDias;
            let totalPagar = costoDias + sobrecargo;

            alert(`los dias de hospitalizacion fueron ${dias} dias
                como tienes ${edad} años el valor del dia esta en ${costoDias}$ 
                y en recargos fueron ${sobrecargo} 
                en total a pagar son ${totalPagar}`)
        }
    } 

    else {
        if (dias <= 1) {
            let costoDias = 20_000;
            let sobrecargo = 0;
            let totalPagar = costoDias + sobrecargo;

            alert(`los dias de hospitalizacion fueron ${dias} dias
                como tienes ${edad} años el valor del dia esta en ${costoDias}$ 
                y en recargos fueron ${sobrecargo} 
                en total a pagar son ${totalPagar}`)
        } 
        
        else if (dias >= 2 && dias <= 4) {
            let costoDias = 30_000;
            let sobrecargo = 0;
            let totalPagar = costoDias + sobrecargo;

            alert(`los dias de hospitalizacion fueron ${dias} dias
                como tienes ${edad} años el valor del dia esta en ${costoDias}$ 
                y en recargos fueron ${sobrecargo} 
                en total a pagar son ${totalPagar}`)
        } 

        else if (dias >= 5 && dias <= 7) {
            let costoDias = 25_000;
            let sobrecargo = 0.05 * costoDias;
            let totalPagar = costoDias + sobrecargo;

        alert(`los dias de hospitalizacion fueron ${dias} dias
            como tienes ${edad} años el valor del dia esta en ${costoDias}$ 
            y en recargos fueron ${sobrecargo} 
            en total a pagar son ${totalPagar}`)
        } 

        else {
            let costoDias = 15_000;
            let sobrecargo = 0.10 * costoDias;
            let totalPagar = costoDias + sobrecargo;

            alert(`los dias de hospitalizacion fueron ${dias} dias
            como tienes ${edad} años el valor del dia esta en ${costoDias}$ 
            y en recargos fueron ${sobrecargo} 
            en total a pagar son ${totalPagar}`)
        }
    }