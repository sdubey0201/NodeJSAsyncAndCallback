const geoCode = require('./utility/geocode');
const forecast = require('./utility/forecast');


geoCode('pheladelphia', (error, response) => {
    if (error) {
       return console.log(error);
    } 
        console.log(response);
        forecast(response.latitude, response.longitude, (error, response) => {
            if (error) {
              return  console.log(error);
            } 
                console.log(response);
        });


})