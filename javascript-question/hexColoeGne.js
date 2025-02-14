// const hexColorGenerator = () => {
//     const str = "0123456789abcdef";
//     let color = "#";
//     for(let i = 0;i<5;i++){
//         let randomIndex = Math.floor(Math.random() * str.length);
//         color+=str.charAt(randomIndex);
//     }
//     console.log(color)
//     return color;
// }

const randomHexGen = () => {
    return `#${Math.random().toString(16).slice(2,8).padEnd(6,0)}`;
}

console.log(randomHexGen());