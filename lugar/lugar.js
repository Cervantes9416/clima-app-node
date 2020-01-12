const axios = require('axios');

const getLugarLatLng = async(lugar) => {
    const encodedUrl = encodeURI(lugar);
    console.log(encodedUrl);

    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodedUrl}`,
        headers: { 'x-rapidapi-key': 'd3be2ef0cdmshe6a5a991c2ee788p1f1cdejsn8ce1ba3f9162' }
    });

    const resp = await instance.get();
    if (resp.data.Results.length === 0) {
        throw new Error('No hay resultados');
    }

    const data = resp.data.Results[0];
    let { lat, lon, name: direccion } = data;

    return {
        direccion,
        lat,
        lon
    }
}

module.exports = {
    getLugarLatLng
}