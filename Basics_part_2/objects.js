//singleton => when we declare object as literal then it will not a singleton but when it will create from constructor then it will be singleton

//object literals 
// Object.create  it will create through constructor and its a singleton 

const mySym = Symbol("key1");

const jsUSer = {
    name :"om",
   [mySym]: "mykey1",
    "full name":"om bhor",
    age:18,
    location:"jaipur",
    email:"om@google.com",
    isLoggedIn:false,
    lastLoginDays:["monday" , "saturday"]
};

// console.log(jsUSer.email);//also can be access ny this method ["email"]
// console.log(jsUSer["email"]);    
// console.log(jsUSer["full name"]);
// // console.log(jsUSer.full name)//throw error
// console.log(jsUSer[mySym]);//string but we want symbol write mysym in object in sqaure bracket [mySym]

jsUSer.email = "ombhor@om.com";
// Object.freeze(jsUSer); //it can't change afterwards 
// jsUSer.email  ="jbjbsbjbcj@bbsdjdbccjk.com";
// console.log(jsUSer)


jsUSer.greeting = function(){
    console.log("hello js user");
}
jsUSer.greetingTwo = function(){
    console.log(`hello js user , ${this.name}`);
}
console.log(jsUSer.greetingTwo());


