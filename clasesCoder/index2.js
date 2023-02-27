    class Contador{
        static total = 0;

        constructor(nombre){
            this.nombre = nombre;
            this.cuenta = 0;
        }

        increment(){
            this.cuenta += 1;
            Contador.total += 1;
        }

        obtenerResponsable(){
            return console.log(this.nombre);
        }

        obtenerCuentaIndividul(){
            return console.log(this.cuenta);
        }

        obtenerCuentaGlobal(){
            let global = 0;
            global  += Contador.total;
        }

    }

    const persona1 = new Contador("Matias");
    const persona2 = new Contador("Franco");
    persona1.increment();
    persona1.increment();
    persona1.increment();
    persona1.increment();
    persona2.increment();
    console.log(persona1.cuenta);
    console.log(Contador.total);
    persona1.obtenerResponsable();
    persona2.obtenerResponsable();
    persona2.obtenerCuentaIndividul();
    persona1.obtenerCuentaIndividul();
    Contador.obtenerCuentaGlobal();










