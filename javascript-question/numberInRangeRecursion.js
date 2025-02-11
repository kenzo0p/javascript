const numberInRange = (a ,b ,arr
     = []) => {
    if(a<=b){
        arr.push(a);
        return numberInRange(a+1 , b,arr) ;
    }
    return arr;
}
console.log(numberInRange(0,5));