//for of loop

//["" , "" , ""]
//[{} , {} , {}]

const arr = [1,2,3,4,5,6]
for (const element of arr) {
    // console.log(element);
}

const greetings = "Hello World!"
for (const greet of greetings) {
    // console.log(`each char is ${greet}`);
}

// Maps (return only unique values not duplicate values and jis order mein insert hua usi mein rahega)
const map = new Map()
map.set('IN' , 'INDIA');
map.set('USA' , 'United States Of America');
map.set('Fr' , 'France');

// console.log(map)

for (const [key ,value] of map) {
    // console.log(key , ':-' ,value);
}

const myObject = {
    game1 : "NFS",
    game2 : "Spiderman"
}

for (const [key , value] of myObject) {
    console.log(key , ':-' , value);
}