// const calculateMean = (arr) => {
//     if(arr.length === 0){
//         return 0;
//     }
//     let sum = 0;
//     for(let i =0;i<arr.length;i++){
//         sum = sum+arr[i];
//     }

//     return sum/arr.length;
// }

const calculateMean = (arr) => {
    if(arr.length === 0){
        return 0;
    }

    let sum = arr.reduce((accum , curr) => accum + curr , 0)
    return sum/arr.length;
}

console.log(calculateMean([1,2,3,4,5]));