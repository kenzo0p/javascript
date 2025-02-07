const numberInRange = (num , range) => {
    let a = [];
    while(num <= range){
        a.push(num);
        num++;
    }
    return a;
}
console.log(numberInRange(0,5));