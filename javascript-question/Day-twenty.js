// const reverseString = (str) => {
//   str = str.split("");
//   let temp;
//   let n = str.length;
//   let end = n - 1;
//   for (let i = 0; i < n/2; i++) {
//     temp = str[end];
//     str[end] = str[i];
//     str[i] = temp;
//     end--;
//   }
//   return str.join("");
// };

const reverseString = (str) => {
    let r_str = "";
    for(let i =str.length-1;i>=0;i--){
        r_str = r_str + str[i];
    }
    return r_str;
}

console.log(reverseString("hello"));
