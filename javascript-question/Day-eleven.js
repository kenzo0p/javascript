// function sumOfDigits(number){
//     if(number < 0) {
//         return;
//     }
//     const array = number.toString().split("").map(Number);
//     let sum = 0;
//     for(let i =0;i<array.length;i++){
//         sum = sum + array[i];
//     }
//     return sum;
// }

const sumOfDigits = (num) => {
    let arr = Array.from(String(num) ,Number);
    console.log(arr);
    return arr.reduce((acum , curr) => acum += curr , 0)
}

console.log(sumOfDigits(1234));