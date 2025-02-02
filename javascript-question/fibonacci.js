const fib = (num) => {
    if(num <= 1){
        return num;
    }else {
        return fib(num-1) + fib(num-2);
    }

}

console.log(fib(0));
console.log(fib(1));
console.log(fib(2));
console.log(fib(3));