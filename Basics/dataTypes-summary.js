//primitive datatype
// 7 types: String , Number ,Boolean , null(khali hain) , undefined ,Symbol(use for making values unique) ,BigInt



//reference type(non primitive)
//Arrays , Objects , Functions
//js is dynamically typed language

//for symbol 
// const id = Symbol('123');
// const anotherId =Symbol('123')

// console.log(id ===anotherId)

// const bigNumber = 5753453457365765766746664756746574657n;
// console.log(typeof bigNumber)


const heroes = ["shaktiman" , "naagraj" , "doga"];
const obj = {
    name:"hitesh",
    age:"22",
}

const myfunction = function (){
    console.log("hello world");
};


// https://262.ecma-international.org/5.1/#sec-11.4.3



//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//memory concept

//stack (primitive) heap(non-primitive)
let myYoutubeName = "ombhor.yt";
let anotherName = myYoutubeName; 
anotherName= "om";
console.log(myYoutubeName)
console.log(anotherName)
let user = {
    email:"user@gmail.com",
    upi:"user@"
}