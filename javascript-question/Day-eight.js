function findFactorial(num){
    let fact = 1;
    for(let i =1  ; i<=num ; i++){
        fact = fact * i ;
    }
    return `The factorial of number ${num} is ${fact}`;
}
console.log(findFactorial(5));