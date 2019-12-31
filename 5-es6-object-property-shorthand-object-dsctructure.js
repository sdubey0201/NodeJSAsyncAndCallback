
// Note: Oject propery shorthand
const name ='sunil';
const userAge=30;

//cunstruct js object using constant 2-way

const person ={
    name:name,

    age:userAge,
    gender:'m'
}
console.log(person);

const person1 ={
    name,
    age:userAge,
    gender:'m'
}
console.log('-----------ES6 property shorthand------');
console.log(person1);


// object destructuring 

const product = {
    label:'product label',
    price:3,
    stock:201,
    salePrice:undefined,
    rating:4.3
}

//manual dstructuring 

const mLabel= product.label;
const mPrice = product.price;
const mStock = product.stock;


//note ES6 destructuring
console.log('-----------ES6------destructuring------');
// const {label,price,rating=5} = product;
// console.log(label);

const {label:productLabel,price,rating=5} = product;
console.log(productLabel); // change label as product lable
console.log(price);
console.log(rating);//pring 4.3 actual value not default(5) value ,it use default values when there is not propery in js object\


const transaction = (type,{label,price,stock})=>{
    console.log(label,price,stock);
    
}

transaction('test',product);



