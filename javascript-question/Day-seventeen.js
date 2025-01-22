// const toCamelCase = (str) => {
//      str = str.split(" ");
//      return str.map((elem ,index) => {
//         if(index == 0) {
//             return elem.toLowerCase()
//         }else {
//             return elem.charAt(0).toUpperCase() + elem.slice(1).toLowerCase();
//         }
// }).join("")

// }


const toSnakeCase = (str) => {
    return str.toLowerCase().split(" ").join("_");
}

console.log(toSnakeCase("hello world om"))