// const findMin = (arr) => {
//     arr = arr.sort((a ,b) => a-b);
//     return arr[0];
// }
// const findMin = (arr) => {
//      arr.sort((a,b) => {
//         if(b>a) return -1;
//     })
//     return arr[0];
// }
const findMin = (arr) => {
    // console.log(...arr)
    if(arr.length === 0) return 'Emptry array'
     return Math.min(...arr)
}
console.log(findMin([5,-3,0,12,-7]))
console.log(findMin([]))