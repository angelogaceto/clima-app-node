const lugar = require('./lugar/lugar');
const clima=require('./clima/clima');
const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Dirección de la ciudad para obtener el clima',
        demand: true
    }

}).argv;

 console.log(argv.direccion);

// lugar.getLugarLatLng_(argv.direccion)
// .then(resp=>{console.log(resp);})
// .catch(e=>{console.log(e)})

clima.getclima(35,139)
.then(resp=>{console.log(resp)})
.catch(e=>{console.log(e)})
