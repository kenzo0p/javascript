//dates

// let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate); //object

// let myCreatedDate = new Date(2023,0,23);//months starts from 0 in javascript
// let myCreatedDate = new Date(2023,0,23,5,3);
// let myCreatedDate = new Date("2023-01-14");
let myCreatedDate = new Date("01-14-2023");
// console.log(myCreatedDate.toLocaleString());

let myTimestamp =Date.now();
// console.log(myTimestamp); //for exact time like who give answer first like this it will give a value in mili seconds
// console.log(myCreatedDate.getTime());//getTime() give value in miliseconds 



//for converting it to miliseconds
// console.log(Date.now()/1000) ///it will give in point values but we dont want so for this use math.floor
// console.log(Math.floor(Date.now()/1000)); 



let newDate = new Date();
// console.log(newDate)
// console.log(newDate.getDate())
// console.log(newDate.getDay())
// console.log(newDate.getMonth()+1)


newDate.toLocaleString('dafault' ,{
    weekday:"long",
})

