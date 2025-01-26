// const startWith = (str , str2) => {
//     str = str.toLowerCase().split(" ");
//     if(str[0] === str2.toLowerCase()){
//         return true;
//     }
//     return false;
// }


const startWith = (str,subStr) => {
    // return str.toLowerCase().startsWith(subStr.toLowerCase());
    return str.toLowerCase().slice(0 ,subStr.length) === subStr.toLowerCase();
}   

console.log(startWith("Hello world" , "hello"));