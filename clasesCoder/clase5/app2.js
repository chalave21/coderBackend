function numerosAleatoreos() {
    //Inicializo un array vacio.
    const array = [];
    //Inicializo un objeto vacio.
    const numerosObj = {};
    //genero 10 mil numeros del 1 al 10 mil.
    for (i = 1; i < 10001; i++) {
        //Genero un rango del 1 al 20.
        const numAl = Math.floor(Math.random() * 20) + 1;
        //Subo los 10 mil numeros aleatorios del 1 al 20 al array.
        array.push(numAl);
        //Verifico si numerosObj existe.
        if (numerosObj[numAl]) {
            //si existe le sumo 1 a su valor.
            numerosObj[numAl]++;
        } else {
            //si no existe , lo creo y inicializo su valor en 1.
            numerosObj[numAl] = 1;
        }
    }


        console.log("Pares NumAleatoreo:Repeticiones",numerosObj);
    
    
    
};

numerosAleatoreos();