const myObject = { //for printing the object we use for in loop
    js:"javascript",
    cpp:"c++",
    rb:"ruby",
    swift:"swift by apple"
}


for (const key in myObject) {
    // console.log(key);
}
for (const key in myObject) {
    // console.log(myObject[key]);
}
for (const key in myObject) {
    // console.log(`${key} and its fullform is ${myObject[key]}`);
}



const  p = ["ruby" , "js"  ,"java" , "cpp"];

for (const key in p) {
    console.log(p[key])
   
}
for (const key in p) {
    // console.log(key)
   
}


//we cant use  for in loop in map beacuse map is not iteratable
