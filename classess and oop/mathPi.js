const descriptor = Object.getOwnPropertyDescriptor(Math , "PI");
console.log(descriptor);
console.log(Math.PI);

const chai = {
    name :"ginger chai",
    price:250,
    isAvailable:true,


    orderChai:function(){
        console.log("code phat gaya");
    }
}
console.log(Object.getOwnPropertyDescriptor(chai , "name"));


Object.defineProperty(chai, "name" , {
    // writable:false,
    enumerable:true,
})

// console.log(Object.getOwnPropertyDescriptor(chai , "name"));
for (let [key ,value] of Object.entries(chai)) {
    if(typeof value !== 'function'){
        console.log(`${key} , ${value}`)
    }
}