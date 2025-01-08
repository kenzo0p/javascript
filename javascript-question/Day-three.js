// function countChar(str, char) {
//   const lowercase = str.toLowerCase();
//   const array = lowercase.split(""); //splitting the string into array so for that we dont need to space in split
// //   console.log(array);
//   let count = 0;
//   array.map((st) => {
//     if (st === char.toLowerCase()) {
//       count++;
//     }
//   });
//   console.log(count);
// }

// countChar("MissIssippi", "I");


//! Another method

const countChar = (word , char) => {
    word = word.toLowerCase();
    char = char.toLowerCase();
    totalCount = word.split("").reduce((acc, curChar) => {
        if(curChar === char) {
            acc++;
        }
        return acc;
    } ,0);
    return totalCount;
    
    

}

console.log(countChar("Hii" ,"I"));