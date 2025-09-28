    // 5 --------------------------ventas---

    /*
    digite el ingreso del precio de un producto y se debe calcular el iva,
    mostrar cuanto es el iva que se agrega, mostrar el precio del producto
    sin iva y el total a pagar
    */

    let preceProduct = Number(prompt("porfavor agrege el precio del producto")) ;
    let iva = 19/100 ;

    let preceProductIva = preceProduct + iva;
    alert(`el valor del producto es ${preceProduct}
        el iva ha agregar ${iva} %
        total producto + iva ${preceProductIva}
        `)