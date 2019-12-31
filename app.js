const geoCode = require('./utility/geocode');
const forecast = require('./utility/forecast');


// Note: comment the older veriosn of thie function

// geoCode('pheladelphia', (error, response) => {
//     if (error) {
//        return console.log(error);
//     } 
//         console.log(response);
//         forecast(response.latitude, response.longitude, (error, response) => {
//             if (error) {
//               return  console.log(error);
//             } 
//                 console.log(response);
//         });


// })

//Note: using the ES6 object desctructuring 

geoCode('pheladelphia', (error, {latitude,longitude}) => {
  if (error) {
     return console.log(error);
  } 
      console.log(latitude,longitude);
      forecast(latitude, longitude, (error, response) => {
          if (error) {
            return  console.log(error);
          } 
              console.log(response);
      });


})