

    // 6 --------------notas

    /*
    calcule el porcentaje de alumnos de un salon de clases , digitando el total de alumnos
    hombre y mujeres 
    */

    let boy = 10;
    let girl = 5 ;

    let alumnos = boy + girl;

    let percentageBoy =boy / alumnos  ;
    let percentageGirl =girl / alumnos  ;

    let percentageBoyFinal = percentageBoy * 100;
    let percentagegirlFinal = percentageGirl * 100;

    alert (`el total de alumnos es ${alumnos}
        el numero de hombre es ${boy} en promedio ${percentageBoyFinal}%
        el numero de mujeres es ${girl} en promedio ${percentagegirlFinal}%
        `)

    // 7 ---------------------------------nota-------
    
    /*
    calcule el promedio de 3 notas de un alumno , el rango de cada nota es del 1 al 5
    */

    let nota1 = 4;
    let nota2 = 2;
    let nota3 = 5;

    let promedio = (nota1 + nota2 + nota3) /3;
    alert("el promedio de la nota del alumno es: "+promedio)