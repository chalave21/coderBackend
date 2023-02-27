const fs = require("fs");

class Contenedor {
    constructor(nombreArchivo){
            this.nombreArchivo = nombreArchivo;
        }

        async save(object) {
            try {
              let contenido = await fs.promises.readFile(this.nombreArchivo, 'utf-8');
              let objects = [];
              if (contenido.length > 0) {
                objects = JSON.parse(contenido);
              }
              const existingObject = objects.find(obj => obj.id === object.id);
            if (existingObject !== undefined) {
              console.log(`Objeto con ID ${object.id} ya existe en el archivo.`);
              return;
            }
              objects.push(object);
              await fs.promises.writeFile(this.nombreArchivo, JSON.stringify(objects, null, 2));
            } catch (error) {
              console.error('Error en save:', error);
            }
          }
          

          async getById(id) {
            try {
              const contenido = await fs.promises.readFile(this.nombreArchivo, 'utf-8');
              if(!contenido){
                return console.log("El Archivo esta vacio.");
              }
              const objects = JSON.parse(contenido);
              const object = objects.find(obj => obj.id === id);
              if (object !== undefined) {
                return console.log(object)
              }else{
                console.log("No se encontro ningun ID con ese numero.")
              }
            } catch (error) {
              console.error('Error en getById:', error);
              return null;
            }
          }
    

  async  getAll(){
        //devuelve un array con los objetos presentes en el archivo.
        try{
          const contenido = await fs.promises.readFile(this.nombreArchivo, 'utf-8');
           if(!contenido){
                return console.log("El Archivo esta vacio.");
              }
              const objects = JSON.parse(contenido);
              return console.log(objects);
        }catch (error) {
            console.error('Error en getAll:', error);
            return null;
          }
    }

   async deleteById(id){
        // elimina del archivo el objeto con el id buscado.
        try {
          const contenido = await fs.promises.readFile(this.nombreArchivo, 'utf-8');
          if(!contenido){
            return console.log("El Archivo esta vacio.");
          }
          const objects = JSON.parse(contenido);
          const index = objects.findIndex(obj => obj.id === id);
          if (index !== -1) {
            objects.splice(index, 1);
            await fs.promises.writeFile(this.nombreArchivo, JSON.stringify(objects, null, 2));
            console.log(`Objeto con ID ${id} eliminado del archivo.`);
         } else {
            console.log("No se encontró ningún ID con ese número.");
         }
        } catch (error) {
          console.error('Error en deleteById:', error);
          return null;
        }
    }

    async deleteAll() {
      try {
        await fs.promises.writeFile(this.nombreArchivo, '');
        console.log('Todos los objetos han sido eliminados del archivo.');
      } catch (error) {
        console.error('Error en deleteAll:', error);
        return null;
      }
    }
     
}


module.exports = Contenedor;