const removeDuplicates = (arr) => {
    let newArr = [...new Set(arr)];
    return newArr;
}


function removeDup(arr){
    let newArr =[];
    for(let i  = 0;i<arr.length;i++){
        if(!newArr.includes(arr[i])){
            newArr.push(arr[i])
        }
    }
    return newArr
}



// let uniqueSet = new Set();
// for (let i = 0; i < array.length; i++) {
//     uniqueSet.add(array[i]); // A Set automatically prevents duplicates
// }
// return Array.from(uniqueSet);

console.log(removeDuplicates([1,2,3,1,5,3]))
console.log(removeDup([2,2,3,3,1,1,5,5]))