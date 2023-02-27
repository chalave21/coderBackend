


const texto = "Hola esto es un texto";
const nombre = "Matias";

//class

class Escritor {
    constructor(nombre,texto){
        this.nombre = nombre;
        this.texto = texto;
    }

    escribirTexto(){

        console.log(this.texto);
        const fecha = new Date().toLocaleDateString();
        console.log(`${this.nombre} termino de escribir el texto en  ${fecha}`);
    }

}

const persona1 = new Escritor(nombre,texto);
persona1.escribirTexto();

function hola(){
    console.log("hola");
}

hola.call();