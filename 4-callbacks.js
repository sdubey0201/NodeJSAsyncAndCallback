setTimeout(()=>{
    console.log('after 2 second')
},2000);

const names =['test','testtest','testtesttest'];
names.filter((name)=>{
  return name.length>=4;
});

const geoCode = (addess,callback)=>{
    setTimeout(()=>{
        const data={
            latitude:0,
            longitude:0
        };
        callback(data);
    },2000);
}

geoCode('test',(data)=>{
    console.log(data);
    
});

const add = (a,b,callback)=> {
    setTimeout(()=>{
        const sum= a+b;
        callback(sum);
    },2000);
};

add(2,3,(sum)=>{
    console.log('sum is :',sum);
    
});