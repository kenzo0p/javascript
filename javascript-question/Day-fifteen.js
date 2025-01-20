const sumOfSquares = (arr) => {
    // return arr.reduce((accum ,curElem) => accum = accum + (curElem * curElem) ,0);
    let sum = 0;
    for(let i = 0;i<arr.length;i++){
        sum = sum+(arr[i]*arr[i]);
    }
    return sum;
}

console.log(sumOfSquares([1,2,3]))