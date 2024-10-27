//ES6

// class User {
//     constructor(username , email,password) {
//         this.username = username;
//         this.email = email;
//         this.password =password;
//     }

//     encryptPassword(){
//         return `${this.password}abc`;
//     }
//     changeUsername(){
//         return `${this.username.toUpperCase()}`;
//     }
// }

// const chai = new User("om", "om@o.com" , "1234");
// console.log(chai.encryptPassword());
// console.log(chai.changeUsername());



//behind the scene

function User(username,password,email){
        this.username = username;
        this.email = email;
        this.password =password;
}
User.prototype.encryptPassword = function(){
    return `${this.password}abcd`;
}
User.prototype.changeUsername = function(){
    return `${this.username.toUpperCase()}`;
}
const tea =  new User("tea", "tea@g.com" , "12345");
console.log(tea.changeUsername());