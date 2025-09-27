    // 3 -------------------------------calculator----

    /*
    realize las operaciones de sumar , restar , multiplicar , divicion  y modulo 
    pidiendole solo dos numeros
    */


    do {
    let menu = prompt(`elige una operacion: 
    1 - suma 
    2 - resta 
    3 - multiplicacion 
    4 - divicion 
    5 - AREA DEL TRIANGULO
    6 - salir`);

    if (menu == 6){
        alert("saliendo");
    }
        let numberUne = Number(prompt("porfavor ingrese el primer numero"));
        let numberTwo = Number(prompt("ingrese el segundo numero")); 
    
    

    switch (menu) {
        case "1" :
            alert("la suma es: "+(numberUne + numberTwo));
            break
        case "2" :
            alert("la resta es: "+(numberUne - numberTwo));
            break
        case "3" : 
            alert("la multiplicacion es: "+(numberUne * numberTwo));
            break
        case "4" :
            if(numberTwo == "0"){
                alert("no puedes dividir entre cero (0) ")
            }else {
            alert("la divicion dio: "+(numberUne / numberTwo));
            }
            break

        case "6" :
            alert("saliendo");
            break
                            // 2 -------------------------------area-
                            /* 
                            aplique la formula a=(b*h)/2 para calcular el area de un triangulo donde sus dimenciones
                            base y altura se deben pedir al usuario que los digite 
                            */
        case "5" :
            alert("el area del triangulo es: " +((numberUne * numberTwo)/2));
        break
        default : alert("intenta de nuevo");
    } 
    }while (menu != "6" )
    