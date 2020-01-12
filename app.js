const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: "Direccion de la ciudad para obtener el clima",
        demand: true,
    }
}).argv;

const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');

const getInfo = async(direccion) => {
    try {
        let coord = await lugar.getLugarLatLng();
        let temperatura = await clima.getClima(coord.lan, coord.lon);
        return `El clima de ${coord.direccion} es de ${temperatura}`;
    } catch {
        return `No se pudo determinar el clima de ${direccion}`;
    }
}