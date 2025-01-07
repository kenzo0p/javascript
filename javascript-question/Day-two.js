// question hash tag generator

// const generatorHashTag = (str) => {
//     if(str.length > 280 || str.trim().length === 0){
//        return false;
//     }
//     const arrayString = str.split(' ');//converting to the array
//     const capString = arrayString.map((word) => word.charAt(0).toUpperCase() + word.slice(1)) //the slice method  will take rest of the chars from 1 
//     const join = capString.join("");//join method again join it as it is
//     console.log("#" + join) //concatination
// }

// generatorHashTag("generate");


// another method
const generatorHashTag = (str) => {
    if(str.length > 280 || str.trim().length === 0){
       return false;
    }
    const arrayString = str.split(' ');//converting to the array
    const capString = arrayString.map((word) => word.replace(word[0] ,word[0].toUpperCase())) //in replace method we are just changing the first element rest will stay there no need to use slice theree
    return `#${capString.join("")}`;//join method again join it as it is
}

console.log(generatorHashTag("generate"));