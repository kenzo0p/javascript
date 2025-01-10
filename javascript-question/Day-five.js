// sort an array

function sortAnArray(array) {
    // return array.sort((a,b) => a-b);
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length - i - 1; j++) {
          if (array[j] > array[j + 1]) {
            // Swap arr[j] and arr[j + 1]
            let temp = array[j];
            array[j] = array[j + 1];
            array[j + 1] = temp;
          }
        }
      }
    return array
}
console.log( sortAnArray([2,4,1,5]));