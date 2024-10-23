//if statement     {curly brackets also call scope}
// const isUserLoggedin = true
// const temperature = 41

// if(temperature === 41) {
//     console.log("less than 50")
// }else{
//     console.log("temprature is greater than 50")
// }
// console.log("execute")

// < ,> , <= ,>= , ==(checking that this equal or not), != ,===(it also check the type also called strict equal) , !==
// i.e 
// console.log(2 == "2"); //true
// console.log(2 === "2"); //false


// const score =200;
// if(score > 100){
//     const power = "fly";
//     var power = "fly";
//     console.log(`User power : ${power}`);
// }

//var keyword is completely global i.e var power can be accessible after if statement also 




const balance  =1000;
// if(balance > 500) console.log("test"); //impilcit scope but we cant write in second line its in same line but by giving comma its posssible
// if(balance > 500) console.log("test") ,
// console.log("tset") //impilcit scope but we cant write in second line its in same line but by giving comma its posssible ut dont do like this



// if (balance < 500){
//     console.log("less than 500");

// }else if(balance < 750){
//     console.log("less than 750");
// }
// else if(balance < 900){
//     console.log("less than 900");
// }else{
//     console.log("less than 1200");
// }
const userLoggedIn  =true;
const debitCard = true;
const loggedInFromGoogle = false;
const loggedInFromEmail  = true;
if (userLoggedIn && debitCard && 2==2) {
    console.log("allow to buy courses");
}

if (loggedInFromEmail || loggedInFromGoogle) {
    console.log("User logged in");
}