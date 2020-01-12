const axios = require('axios');

const getClima = async(lat, lon) => {
    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=bc742c897c9387500325084b91042eac
    &units=metric`)

    return resp.data.main.temp;
}

module.exports = {
    getClima
}