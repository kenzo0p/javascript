const user = {
    username: "om",
    price: 999,

    welcomeMessage: function () {
        console.log(`${this.username} Welcome to website`); //this => current context
        console.log(this);
    }

}

// user.welcomeMessage()
// user.username = "sam";
// user.welcomeMessage()

// console.log(this)//{} empty object and in dev tool its window object 

// function chai (){
//     let username ="om"
//     console.log(this.username); //we can use it in object like upper example but not inthis case it will print undefined
// }
// chai()

// const chai = function () {
//     let username ="om"
//     console.log(this.username); //we can use it in object like upper example but not inthis case it will print undefined
// }
// chai()

// Arrow functions



const chai =  () => {
    let username ="om"
    console.log(this); 
}
// chai()



const addTwo = (num1  ,num2) => {
    return num1+num2; //explicit return
}
// const addTwo = (num1 , num2) => num1+num2;// this is also valid ye maan leta hain for return ki apko isko likhane ki jarurat nhi i.e implicit function
// const addTwo = (num1 , num2) => (num1+num2);// when curly braces are used then we need to write the return but if not then there is no need

// const addTwo = (num1 , num2) => ({username : "om"});// for object  is no need


console.log(addTwo(1,2));



const myArray  =[2,3,4,5];
// myArray.forEach()



