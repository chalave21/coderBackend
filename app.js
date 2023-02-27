const Contenedor = require("./clases/contenedor");
const object = require("./objects/objects");

const archivo1 = new Contenedor("./archivos/archivo.txt");


//function
{
async function save() {
   await archivo1.save(object[0]);
   await archivo1.save(object[1]);
  
  }

async function id() {
    
  await archivo1.getById(1);
  }

//async function deleted() {
    
  //await archivo1.deleteById(1);
  //}

async function deletedAll(){
  await archivo1.deleteAll();
}

async function all(){
  await archivo1.getAll();
}
  
  async function load(){
    await save();
    await id();
    //await deleted();
    await deletedAll();
    await all();
  };

  load();
}

