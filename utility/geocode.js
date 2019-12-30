const request = require('request');

//older version 
// const geocodingUrl = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoiZGV2c3VuaWwiLCJhIjoiY2s0czdxeDE1MHhicTN1cDQyd2t6eTBkaCJ9.hACwDzOEiqkTNi4817sEGg&limit=1'

// request({ url: geocodingUrl, json: true }, (error, response) => {
//     if (error) {
//         console.log('Unable to connect with geocoding api');

//     } else if (response.body.error || response.body.features.length === 0) {
//         console.log('Unable to find the geo location');
//     } else {
//         const latitude = response.body.features[0].center[0]
//         const longitude = response.body.features[0].center[1]
//         console.log('latitude, longitude',latitude,longitude);

//     }
// });





//improved version 
const geoCode = (address, callback) => {
    const geocodingUrl = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + address + '.json?access_token=pk.eyJ1IjoiZGV2c3VuaWwiLCJhIjoiY2s0czdxeDE1MHhicTN1cDQyd2t6eTBkaCJ9.hACwDzOEiqkTNi4817sEGg&limit=1'
    request({ url: geocodingUrl, json: true }, (error, response) => {
        if (error) {
            callback('Unable to connect with geocoding service!', undefined)
        } else if (response.body.error || response.body.features.length === 0) {
            callback('Unable to find the geocode try serach another location', undefined);

        } else {
            callback(undefined, {
                latitude: response.body.features[0].center[0],
                longitude: response.body.features[0].center[1]
            });
        }
    });
};
module.exports = geoCode;