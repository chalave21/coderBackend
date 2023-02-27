// function buenoMalo(bueno,malo){
//     return new Promise ((resolve,reject) => {
//         if(bueno === "Dios"){
//             resolve(`${bueno}`);
//         }else{
//             reject(`Lo siento usted es ${malo}`);
//         }
//     });
// }


// const bueno = "Dios";
// const malo = "Diabolico";

// buenoMalo(bueno,malo)
// .then((resultado) => {
//     console.log(`resultado : ${resultado}`);
// })
// .catch((error) => {
//     console.log(`error: ${error}`);
// })

const argumento1 = "Soy el argumento 1 el correcto";
const argumento2 = "Soy el argumento 2 el incorrecto";

function argumento(argumento1,argumento2){
  return new Promise((resolve,reject)=>{
    if(argumento1 = ""){
      resolve(argumento1);
    }else{
      reject(argumento2);
    }
  },[3000]);
}

argumento(argumento1,argumento2)
.then((resultado) =>{
  console.log(resultado);
})
.catch((err) =>{
  console.log(`error , revisar ${err}`);
});
