const findMedian = (arr) => {
     arr = arr.sort((a,b) => a-b);
    // let temp = 0;
    // for(let i = 0; i < arr.length; i++) {
    //     for(let j = 0; j < arr.length - i - 1; j++) {
    //         if(arr[j] > arr[j + 1]) {
    //             temp = arr[j];
    //             arr[j] = arr[j + 1];
    //             arr[j + 1] = temp;
    //         }
    //     }
    // }
    let length = arr.length;
    let mid = Math.floor(length/2);
    if(length%2 !== 0){
        return arr[mid];
    }else {
        
        return (arr[mid] + arr[mid-1])/2;
    }

    
}

console.log(findMedian([3,4,7,4,3]));
console.log(findMedian([2,4,6,8]));