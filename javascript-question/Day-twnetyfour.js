const mode = (arr) => {
   let count = {};
   let maxNum = 0;
   let mode;
    for(let elem of arr){
        //key       = value in obj
        count[elem] = (count[elem] || 0) + 1;
        if(count[elem]  > maxNum){
            maxNum = count[elem];
            mode = elem;
        }
   }
  return mode;
}

console.log(mode([2,2,2,1,4,5,6]))