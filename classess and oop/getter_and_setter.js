class User {
    constructor(email,password){
        this.email = email;
        this.password = password;
    }
    get password(){
        return this._password.toUpperCase()
    }
    set password(value){
         this._password = value.toUpperCase()
    }
}
const om = new User("o@o.com" , "abc");
console.log(om.password);





// encrypt karke du ya yese hi duu in get and set method.
 /*
 Getters and setters are accessor functions that allow you to define custom behavior when reading or writing a property of an object. In JavaScript, getters and setters are used to encapsulate data and provide a way to validate or transform the data when it’s accessed or modified. */