const request = require('request');

// note : older version

// const url = 'https://api.darksky.net/forecast/b2509fa5da82db180ae664fff18eb50d/37.8267,-122.4233';
// // request({url:url},(error,response)=>{
// //     if(error)
// //     {
// //        console.log('----error----',error);

// //     }
// //     const data = JSON.parse(response.body);
// //     console.log('----data----',data.currently);

// // });

// request({ url: url, json: true }, (error, response) => {
//     if (error) {
//         console.log('----error----', error);
//     } else if (response.body.error) {
//         console.log('unable to find the weather report');

//     } else {
//         console.log('----data----', response.body.currently);
//     }


// });

const forecast = (latitude, longitude, callback) => {
    const url = 'https://api.darksky.net/forecast/b2509fa5da82db180ae664fff18eb50d/' + latitude + ',' + longitude;
    request({ url: url, json: true }, (error, response) => {
        if (error) {
            callback('Unable to connect with forecast service', undefined);
        } else if (response.body.error) {
            callback('Unable to find the forecast', undefined);
        } else {
            const data = 'currently tramprature is ' + response.body.currently.temperature;
            callback(undefined, data)
        }
    });
}
module.exports = forecast;