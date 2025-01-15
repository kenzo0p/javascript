// function arrayEqual(arr1, arr2) {
//   // console.log(...arr2 , ...arr1);
//   if (arr1.length !== arr2.length) {
//     return false;
//   }
//   let sortArray = arr1.sort((a, b) => a - b);
//   let sortArray2 = arr2.sort((a, b) => a - b);
//   for (let i = 0; i < sortArray.length; i++) {
//     if (sortArray[i] !== sortArray2[i]) {
//       return false;
//     }
//   }
//   return true;
// }

// its checking each and every element without sorting another question
const arrayEqual = (arr1, arr2) => {
  if (arr1.length !== arr2.length) {
    return false;
  }
 return arr1.every((currvalue, index) => currvalue === arr2[index]);
};

console.log(arrayEqual([3, 2, 3], [5, 6, 7]));
console.log(arrayEqual([3, 2, 1], [1, 2, 3])); // true
console.log(arrayEqual([3, 2, 1], [1, 2, 4])); // false
