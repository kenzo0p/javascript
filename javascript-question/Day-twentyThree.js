const countNumbers = (arr) => {
    let count = {};
    for(let elem of arr){
        count[elem] = (count[elem] || 0)+1;
    }
    return count;
}
console.log(countNumbers([2,2,2,1,4,5,6]))