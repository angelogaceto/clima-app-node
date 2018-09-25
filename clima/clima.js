const axios = require('axios');

const getclima=async (lat,lng)=>{
    let url=`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=ec5b2422b91d659533c7145341aab4a5`;
// console.log(url);
let resp=await axios.get(url);
// console.log(resp);
return {
    resp:resp.data
}
}

module.exports={
    getclima
}