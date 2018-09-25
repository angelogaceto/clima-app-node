const axios = require('axios');


const getLugarLatLng = (direccion) => {
    let encodeUrl = encodeURI(direccion);
    axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodeUrl}`)
        // axios({method: 'get',url:'https://demos.telerik.com/kendo-ui/service/Products'})
        // dataType: 'jsonp',jsonp: 'callback',jsonpCallback: 'jsonpCallback'     
        .then((resp) => {
            // console.log(JSON.stringify(resp.data, undefined, 2));
            let location = resp.data.results[0];
            let coors = location.geometry.location;

        })
        .catch(e => {
            console.log(e);
        });

    return {
        direccion: location.formatted_address,
        lat: coors.lat,
        lng: coors.lng
    }

}
const getLugarLatLng_ =async (direccion) => {
    let encodeUrl = encodeURI(direccion);
    let resp = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodeUrl}`);
    if (res.data.status === 'ZERO_RESULTS') {
        throw new Error(`No hay resultados para la ciudad ${direccion}`);
    }
    let location = resp.data.results[0];
    let coors = location.geometry.location;
    return {
        direccion: location.formatted_address,
        lat: coors.lat,
        lng: coors.lng
    }

}
module.exports={
    getLugarLatLng,
    getLugarLatLng_
}