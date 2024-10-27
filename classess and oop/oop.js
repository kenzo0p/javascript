//object literal

// const user = {
// username:"om",
// loginCount :8,
// SignedIn:true,
// getUserDetails : function() {
// console.log("got data from database")
// console.log(`username:${this.username}`)
// console.log(this);
// }
// }
// console.log(user.username)
// console.log([user])
// console.log(user.getUserDetails())
// console.log(this) //for global context output will be {}



// const promiseOne= new Promise()
// const date = new Date() ///new is a contructor function

function User(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn

    this.greeting = function(){
        console.log(`Welcome ${this.username}`);

    }

    return this
}

const userOne = new User("hitesh", 12, true)
const userTwo = new User("ChaiAurCode", 11, false)
console.log(userOne);
//console.log(userTwo);