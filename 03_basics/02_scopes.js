// var c = 300;
// let a =300;
// if (true) {
//     let a = 10;
//     const b = 20; //in the if statements all are block scope and other than that scope is global
//     // var c = 30;
//     console.log(a)
// }
// console.log(a); //error
// console.log(b);//error
// console.log(c);
// { }//scope

//in windows {when we use insepect and then there dev tool}core cope is different and in codespace their global scope is different
/* 
    What is Lexical Scope?
Lexical scope defines the accessibility of variables and functions depending on their location in the source code. Variables and functions have different levels of scope:

Global Scope: Variables defined outside any function or block, accessible anywhere in the program.
Local Scope: Variables defined inside a function or block, accessible only within that specific function or block.
Nested Scope: Inner functions have access to variables in their parent functions.
Block Scope: Variables defined with let and const are limited to the block they are declared in, like loops or conditionals.
*/


//Nested scope


function one(){
    const username = "om";
    function two(){
        const website = "youtube";   //website only defined for this block
        console.log(username); //but username is valid for this scope beacuse of child will access the parent variable
    }
    // console.log(website);

    
    // two();
}
// one(); error due to website is in its child class and it is not accessible for other than its scope

/*
A closure is the combination of a function bundled together (enclosed)
 with references to its surrounding state (the lexical environment). In other words, 
 a closure gives a function access to its outer scope. In JavaScript, closures are created every time a function is 
 created, at function creation time. 
*/


if (true) {
    const username = "om"
    if(username ==="om"){
        const website = " youtube"
        // console.log(username + website)
    }
    // console.log(website) error
}
// console.timeLog(username) error







//++++++++++++++++++++++++++++++++++++++++++++++Interesting+++++++++++++++++++++++++++++++++++
// addOne(4)  it will be accessible 
function addOne(num){
    return num + 1;
}
// addOne(4)//this only return a value
// console.log(addOne(4));



// addTwo(5);// Cannot access 'addTwo' before initialization beacuse we hold that function in variable but in upper function it will not throw error beacause we didn't store function in variable 
const addTwo = function(num){
    return num +2;
}
// addTwo(5);

//hoisting 


// const x = 1;
// {
//   console.log(x); // ReferenceError
//   const x = 2;
// }



