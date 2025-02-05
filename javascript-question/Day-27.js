// const repeatString = (str , num) => {
//     let newStr = "";
//     for(let i = 1;i<=num;i++){
//         newStr += str;
//     }
//     console.log(newStr);
// }

const repeatString = (str, num) => {

  return num > 0 ? str.repeat(num) : str;
};
console.log(repeatString("", 0));
