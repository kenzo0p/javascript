// array
// const myArray = [0,1,2,3,4,5,true ,"om"];
// const myArray = [0,1,2,3,4,5];
// const myHeroes = ["om" , "saurav"];
// const myArr2 = new Array(1,2,3,4)
// // console.log(myArray[0]);

// array methods

// myArray.push(6);//add from start
// myArray.push(7);
// myArray.pop(); //remove from end



// myArray.unshift(9); //it will add number from begining
// myArray.shift(); //it will remove first element




// console.log(myArray.includes(3))//true
// console.log(myArray.indexOf(9))//false


// console.log(myArray.indexOf(9))//-1
// console.log(myArray.indexOf(3))//3

// const newArr = myArray.join()
// console.log(myArray);
// console.log(newArr)
// console.log(typeof newArr)//string





// slice and splice

// console.log("A" , myArray);

// const myn1 = myArray.slice(1,3);//1,2 last range will not include i.e three will not here elements will not be remove
// console.log(myn1)
// console.log("B" , myArray);


// const myn2 = myArray.splice(1,3);//remove 1,2,3 last range will include i.e three will and also it will remove this elememts from array 
// console.log(myn2)
// console.log("c" , myArray); //0,4,5












// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++Part two ++++++++++++++++++++++++++++++++++++++++++//


// const marvel_heroes = ["thor", "Ironman", "Spiderman"];
// const dc_heroes = ["Superman ", "flash", "batman"];

// marvel_heroes.push(dc_heroes);//concat method wiil also do the same 
// console.log(marvel_heroes);//this will create second array as element
// console.log(marvel_heroes[3][1]);//flash



// const allHeroes = marvel_heroes.concat(dc_heroes);
// console.log(allHeroes);



// spread method  ex- glass when we drop it it will spread

// const all_new_heros = [...marvel_heroes,...dc_heroes]; //spread method for concatination
// console.log(all_new_heros);


// console.log(...marvel_heroes);


// const  anotherArray = [1,2,3,[4,5,6],[6,7,[4,5]]];
// const real_another_array = anotherArray.flat(2);
// console.log(real_another_array);


// console.log(Array.isArray("om"));//it will print false beacuse it not an array
// console.log(Array.from("Hitesh"));//it will give an array from method
// console.log(Array.from({name:"hitesh"}));//it will give an empty array [] //interesting



// let score1 = 100;
// let score2 = 200;
// let score3 = 300;
// console.log(Array.of(score1,score2,score3)); //it will print an array [100,200,300]