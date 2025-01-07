const findLongestWord = (str) => {
    if(str.trim().length === 0){
        return false;
    }
    let strArr = str.split(" ")//splitting it 
    // console.log(strArr)
    strArr = strArr.sort((a,b) => a.length - b.length);//sort by unicode values == ascii values , by using length it will get like according to their length from low to high
    // // strArr = strArr.sort((a,b) => b.length - a.length);//sort by unicode values == ascii values
    console.log(strArr);
    return strArr.at(-1);//this for finding the last element in the array
    // return strArr[0] //for first element

    // another path to find it out by reduce method
    // return strArr.reduce((acc,curr) => (curr.length > acc.length ? curr : acc ), "")
    

}
console.log(findLongestWord("Hii I am om ,I am here to guide you"));