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


const isPowerOfTwoBitwise = (num) => {
    // Explanation: (num & (num - 1)) === 0
    // This expression checks if 'num' is a power of two.
    // A number that is a power of two has exactly one bit set in its binary representation.
    // Subtracting 1 from such a number flips all the bits after the rightmost set bit (including the set bit itself).
    // Performing a bitwise AND between the original number and the result of (num - 1) will yield 0 if there is only one set bit in the original number.
    // For example, for num = 8 (which is 1000 in binary):
    // 8 - 1 = 7 (which is 0111 in binary)
    // 1000 & 0111 = 0000
    return (num > 0) && (num & (num - 1)) === 0;
}

console.log(isPowerOfTwoBitwise(9)); // false
console.log(isPowerOfTwoBitwise(8)); // true