// const isUpperCase = (char) => {
//     if(char === char.toUpperCase()){
//         return true;
//     }
//     return false;
// }
const isUpperCase = (char) => {
  if (char.charCodeAt(0) >= 65 && char.charCodeAt(0) <= 90) {
    return true;
  }
  return false;
};
const isLowerCase = (char) => {
  if (char.charCodeAt(0) >= 97) {
    return true;
  }
  return false;
};

// const isLowerCase = (char) => {
//     console.log(char.charAt(0));
//     if(char === char.toLowerCase()){
//         return true;
//     }
//     return false;
// }

console.log(isLowerCase("S"));
