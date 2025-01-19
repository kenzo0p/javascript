// const powerOfTwo = (num) => {
//     if(num%2===0 && num !== 0 && num > 0){
//         return true
//     }else {
//         return false;
//     }
// }


const isPowerOFTwo = (num) => {
    let op = false;
    for(let i =1;i<=num-1 ;i++){
        if(2**i === num){
            op = true;
        }
    }
    return op;
}

console.log(isPowerOFTwo(9));