const truncateString = (str , len) => {
    // if(len <= 0){
    //     return str;
    // }
    // else if(str.length > len){
    //     return str.slice(0,len).concat("...");
    // }
    // return str;
    return len <= 0 ? str : str.slice(0,len).concat("...")
}

console.log(truncateString("Hii i am om" , 0));