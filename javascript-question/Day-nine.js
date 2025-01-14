// const calculateAverage = (arr) => {
//     let length = arr.length;
//     let sum = 0;
//     for (let i =0 ; i<arr.length; i++) {
//         sum = sum + arr[i];
//     }
//     let  average = sum/length;
//     return `The average of array numbers is ${average}`
// }



const calculateAverage = (arr) => {
    let total = arr.reduce((accum , curElement) => accum + curElement , 0)
    console.log(total);
    return `Average is ${total/arr.length}`;
}

console.log(calculateAverage([5,10,2,8]));