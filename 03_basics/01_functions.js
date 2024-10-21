function sayMyName (){
    console.log("om");
    console.log("om");
    console.log("om");
    console.log("om");
    console.log("om");
};
// sayMyName();


// function addtwoNumbers(number1  ,number2){
//     // return number1 + number2;
//     console.log(number1 + number2);
// }
// addtwoNumbers(1,2);
// addtwoNumbers(1 ,"3");//13
// addtwoNumbers(1 ,"a");//1a
// addtwoNumbers(1 ,null);//1



// const result =  addtwoNumbers(1 ,2);
// console.log("result :" ,result);  
// 3
// result : undefined


//for getting value in result
// function addtwoNumbers(number1  ,number2){
//     return number1 + number2;
// }
// const result =  addtwoNumbers(1 ,2);
// console.log("result :" ,result); 


function loginUserMessage(username){
    if(username === undefined){
        console.log("Please enter the username")
        return;
    }
    return `${username} just logged in`;
}
// console.log(loginUserMessage("Om"));
// console.log(loginUserMessage(""));//just logged in
// console.log(loginUserMessage());//undefined


/*++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */


//shopping cart problem



function calculateCartPrice(...num1){   //...rest operator sometimes its spread operator depend upon its use cases in fuctions it rest
    return num1;
}
console.log(calculateCartPrice(200,400,500));//[200,400,500]
function calculateCartPrice(val1,val2 ,...num1){   //200 and 400 will store in val1 and val2 and others are in rest 
    return num1;
}
console.log(calculateCartPrice(200,400,500,2000));//[500,2000]




const user ={
    username:"om",
    price:199,
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}
// handleObject(user);

handleObject({
    username:"sam",
    price :"399"
});


const myNewArray =[200,400,600,100];
function returnSecondValue(getArray){
    return getArray[1]
}
console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([100,200,300,400]));