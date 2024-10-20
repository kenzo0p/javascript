// const tinder =new Object();//singleton object //constructor
const tinderUser = {};//literal .ie literal
tinderUser.id ="123avc";
tinderUser.name = "om";
tinderUser.isLoggedIn =false;
// console.log(tinderUser)


const regularUser ={
    email:"some@gmail.com",
    fullame:{
        userfullname:{
            firstname:"om",
            lastname:"bhor"
        }
    }
};
// console.log(regularUser.fullame.userfullname.firstname);


//combining the objects 
const obj1  ={
    1:"a",
    2:"b"
}
const obj2={
    3:"a",
    4:"b"
}

// const obj3 ={obj1 , obj2};//{ obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'a', '4': 'b' } }
// const obj3  = Object.assign({},obj1,obj2);//{ '1': 'a', '2': 'b', '3': 'a', '4': 'b' }
const obj3 = {...obj1 ,...obj2};
// console.log(obj3);//this three methods are used to combined the object but spread method always best


const users = [
    {
        id:"1",
        email:"h@gmail.com"
    },
    {
        id:"1",
        email:"a@gmail.com"
    },
    {
        id:"1",
        email:"h@gmail.com"
    }
]


// console.log(users[1].email)


console.log(tinderUser);


console.log(Object.keys(tinderUser));//important it will get in array
console.log(Object.values(tinderUser));//important it will get in array
console.log(Object.entries(tinderUser));//important it will get in array //[ [ 'id', '123avc' ], [ 'name', 'om' ], [ 'isLoggedIn', false ] ]
console.log(tinderUser.hasOwnProperty("isLoggedIn"));

