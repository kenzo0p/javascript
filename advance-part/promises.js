const promiseOne = new Promise(function (resolve, reject) {
    setTimeout(function () {
        console.log("async task is complete");
        resolve();
    }, 1000);
});


promiseOne.then(function () {
    console.log('promise consumed');
});



new Promise(function (resolve, reject) {
    setTimeout(function () {
        console.log("Async task 2");
        resolve();
    })
}).then(function () {
    console.log("Async 2 resolved");
});



const promiseThree = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve({ username: "chai", email: "chai@example.com" });
    }, 1000)
})

promiseThree.then(function (user) {
    console.log(user);
})

const promisefour = new Promise(function (resolve, reject) {
    setTimeout(function () {
        let error = true;
        if (!error) {
            resolve({ username: "om", pass: "1234" });
        } else {
            reject("SOMETHING WENT WRONG");
        }
    }, 1000)
});

promisefour
.then(function (user) {
    console.log(user);
    return user.username;
})
.then(function (username) {
    console.log(username)
})
.catch(function(error){
    console.log(error)
})
.finally(function(){
    console.log('The promise is either resolved or rejected');
})




const promiseFive = new Promise(function(resolve,reject){
    setTimeout(function () {
        let error = true;
        if (!error) {
            resolve({ username: "js", pass: "1234" });
        } else {
            reject("js WENT WRONG");
        }
    }, 1000)
})

async function consumePromiseFive(){
    try {
        const res = await promiseFive
    console.log(res)
    } catch (error) {
        console.log(error)
    }
}
consumePromiseFive();    


// async function getAllUsers(){
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')

//         const data = await response.json()
//         console.log(data);
//     } catch (error) {
//         console.log("E: ", error);
//     }
// }

//getAllUsers()

fetch('https://api.github.com/users/hiteshchoudhary')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
})
.catch((error) => console.log(error))

// promise.all
// yes this is also available, kuch reading aap b kro.