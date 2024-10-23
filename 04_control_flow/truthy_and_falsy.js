const userEmail = "om@om.com";
const userGmail = []
// const userEmail = ""; // dont have 
if (userEmail) {
    console.log("got userEmail")
} else {
    console.log("dont have user  email");
}


// falsy values
// false, 0,  -0  , BigInt 0n , "" , null ,undefied , NaN


// truthy values
// "0" , 'false' , "false" , " " , [] , {} , function(){} //empty  function


// if(userGmail.length === 0){
//     console.log("Array is empty");
// }


const obj = {};


if(Object.keys(obj).length===0){
    console.log("obj")
}

// false == 0 //true
// false == '' //true
// 0 == '' //true


// Nullish Coalescing operator (??) : null undefined

let val1;
val1 = 5 ?? 10; //5
val1 = null ?? 10;//10
val1 = undefined ??15;//15

val1 = null ?? 10 ?? 20; //10



// ternary operator
// condition ? true : false;
  const iceTeaPrice =100
  iceTeaPrice <=80 ? console.log("less than 80") : console.log("more than 80");
