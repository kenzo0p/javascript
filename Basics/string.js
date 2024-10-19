// const name ="om"
// const repoCount =50
// console.log(name+repoCount + " value");
//use backticks instead of double and single quate 
// console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);


const gameName = new String("om-chi-Game") //output will be String{om  chi Game}
// console.log(gameName[1]);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(3));
// console.log(gameName.indexOf("m"));

//search for string methods on dev tools and overview it

const newString = gameName.substring(0 ,4);//no minus values excepted
console.log(newString); //omch last value wii not included 


const anotherString = gameName.slice(-8,4);//if we give reverse value in slice method then it will start from reverse
console.log(anotherString);

const newSttringOne = "  om  ";
console.log(newSttringOne);
console.log(newSttringOne.trim());//it will remove the spaces checkout on mdn there are more of it with start and with end

const url ="https://om.com//om%20bhor"; //here %20 is spaces
//if we write url like that then browser will add %20 in between om bhor ex => om%20bhor 
console.log(url.replace('%20' ,"-"));
console.log(url.includes("om"));
console.log(url.includes("hi"));

console.log(gameName.split('-'))//split method on mdn and string methods.
const i =undefined;
console.log(typeof i);

