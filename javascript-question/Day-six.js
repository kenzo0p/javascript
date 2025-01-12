const isPalindrome = (str) => {
    str  = str.toLowerCase().replace(/\W/g ,"");// for replacing non words if want replace words then small w
    let newString  = str.split("").reverse();
    let final = newString.join("");

    return str === final ? true : false;
}

console.log(isPalindrome("A man, a plan, a canal. Panama"));
console.log(isPalindrome("hello"))
console.log(isPalindrome("racecar"))