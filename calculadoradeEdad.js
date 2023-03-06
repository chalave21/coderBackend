const moment = require("moment");
const fechaActual = moment().format('l');
console.log(fechaActual);
const nacimiento = `Naci Hace ${moment("20111031", "YYYYMMDD").fromNow()}`;
console.log(nacimiento);