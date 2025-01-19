// function countVowels(str){
//     str  = str.toLowerCase().split("");
//     console.log(str)
//     let count =0 ;
//     const vowels = str.map((vowel)=> {
//         if(vowel === 'a' || vowel === 'e'|| vowel === 'i' || vowel === 'o' || vowel === 'u'){
//             count ++;
//         }
//     })
//     return count;
// }
const countVowels = (str) => {
    let vowels = ['a','e' ,'i' , 'o' ,'u'];
    let arr = str.split('');
    let count = 0;
    for(let char of arr){
        if(vowels.includes(char.toLowerCase())){
            count++;
        }
    }
    return count;
}
console.log(countVowels("Hello World"));