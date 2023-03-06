const arrayProductos = [{
    Id : 1,
    name: "Regla",
    price: 300,
},
{
    Id : 2,
    name: "Carpeta",
    price: 1000,
}]

function nombreProductos(){
    const name = arrayProductos.map( (e) => {
        return e.name;
    });
    return name;
}

function precioTotal(){
    let precioTot = 0;
    const precio = arrayProductos.map( (e) => {
        return e.price;
    });
    for(i = 0; i < precio.length; i++){
        precioTot = precioTot + precio[i];
    }
    return precioTot;
}

function precioPromedio(){

    const precio = arrayProductos.map( (e) => {
        return e.price;
    });

    //Reinicio el precio total.
    let precioTot = 0;

    for(i = 0; i < precio.length; i++){
        precioTot = precioTot + precio[i];
    }

    const promedio = precioTot / precio.length;
    return promedio;
}


function productoMenor(){
    const productoMenorPrecio = arrayProductos.reduce((prev, current) => {
        return (prev.price < current.price) ? prev : current;
      });
      
      return productoMenorPrecio;
};

function productoMayor(){
    const productoMayorPrecio = arrayProductos.reduce((prev, current) => {
        return (prev.price > current.price) ? prev : current;
      });
      
      return productoMayorPrecio;
};

precioTotal();
precioPromedio();
nombreProductos();
productoMenor();
productoMayor();

const objetoFinal = {
    nombreProductos: nombreProductos(),
    precioTotal: precioTotal(),
    precioPromedio: precioPromedio(),
    productoMenor: productoMenor(),
    productoMayor: productoMayor(),
  };
  
  console.log(objetoFinal);