const https= require('https');

const url='https://api.darksky.net/forecast/b2509fa5da82db180ae664fff18eb50d/45,-75';
const request = https.request(url,(response)=>{
   let data ='';
   response.on('data',(chunk)=>{
   data = data+chunk.toString();
   console.log('--------chunk data-----',data);
   
   });
   response.on('end',()=>{
       const body = JSON.parse(data);
       console.log('-----------body----------',body);
   });

});
request.on('error',(error)=>{
console.log('Is an error',error);

});
request.end();